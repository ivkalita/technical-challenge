import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'

import { UserModel } from '../models/user.model';
import { AuthClient } from './auth.client';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private static TOKEN_KEY = 'genetic_results_token_key';
    private _user: UserModel = null;

    constructor(private _authClient: AuthClient) {
    }

    get user(): UserModel {
        return this._user;
    }

    restore(): Observable<UserModel | null> {
        const accessToken = this.tryGetLocalAccessToken();
        if (!accessToken) {
            return Observable.of(null);
        }

        return this.invalidateAccessToken(accessToken)
    }

    register(user: UserModel): Observable<UserModel | null> {
        if (this._user) {
            return Observable.of(this._user);
        }

        const subject = new Subject();

        this._authClient
            .register(user)
            .subscribe(token => {
                return this.invalidateAccessToken(token).subscribe(updatedUser => subject.next(updatedUser));
            });

        return subject;
    }

    private tryGetLocalAccessToken(): string | null {
        return window.localStorage.getItem(AuthService.TOKEN_KEY);
    }

    private invalidateAccessToken(token: string): Observable<UserModel | null> {
        return this._authClient
            .getUser(token)
            .map(user => {
                if (user) {
                    this._user = user;
                } else {
                    this._user = null;
                    window.localStorage.setItem(AuthService.TOKEN_KEY, null);
                }

                return user;
            });
    }
}
