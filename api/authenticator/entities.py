from typing import Callable, Union

import requests
from django.contrib.auth.models import AnonymousUser, AbstractUser
from django.http import HttpResponse, HttpRequest

from api.settings import AUTH_APP_BASE_URL


class User(AbstractUser):
    id: int = None


class Authenticator:
    def __call__(self, request: HttpRequest) -> Union[User, AnonymousUser]:
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if not auth_header:
            return AnonymousUser()

        url = AUTH_APP_BASE_URL + '/api/v1/user/'
        headers = {
            'Authorization': auth_header
        }

        try:
            response = requests.get(url, headers=headers)
        except BaseException:
            return AnonymousUser()

        if response.status_code != 200:
            return AnonymousUser()

        user_id = response.json().get('pk', None)
        if user_id is None:
            return AnonymousUser()

        user = User()
        user.id = user_id
        return user


class Middleware:
    def __init__(self, get_response: Callable, authenticator: Callable = Authenticator()) -> None:
        self.get_response = get_response
        self.authenticator = authenticator

    def __call__(self, request: HttpRequest) -> HttpResponse:
        request.user = self.authenticator(request)
        return self.get_response(request)
