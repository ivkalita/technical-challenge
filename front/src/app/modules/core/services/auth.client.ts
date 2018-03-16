import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ApiClient } from './api.client';
import { UserModel } from '../models/user.model';
import { UserSerializer } from '../serializers/user.serializer';

@Injectable()
export class AuthClient {
    constructor(private _apiClient: ApiClient, private _userSerializer: UserSerializer) {
    }

    getUser(token: string): Observable<UserModel | null> {
        return this._apiClient
            .get('/auth/api/v1/user/', {token: token})
            .map(response => this._userSerializer.fromJSON(response.json()))
            .catch(response => Observable.of(null));
    }

    register(user: UserModel): Observable<string> {
        return this._apiClient
            .post('/auth/api/v1/registration/', this._userSerializer.toJSON(user))
            .map(response => response.json()['key']);
    }
}
