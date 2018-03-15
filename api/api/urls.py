from django.conf.urls import url
from django.urls import include

urlpatterns = [
    url(r'^api/v1/', include('results.urls'))
]
