import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import { Subject } from 'rxjs/Subject';

import { UserModel } from '../models/user.model';
import { AuthClient } from './auth.client';

@Injectable()
export class AuthService {
    private static TOKEN_KEY = 'genetic_results_token_key';
    private _user: UserModel = null;

    constructor(private _authClient: AuthClient) {
    }

    get user(): UserModel {
        return this._user;
    }

    get token(): string {
        return this.tryGetLocalAccessToken();
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

    logout() {
        if (this._user) {
            this._user = null;
        }

        const key = this.tryGetLocalAccessToken();
        if (!key) {
            return;
        }

        this.removeAuthToken();

        this._authClient.logout(key);
    }

    login(email: string, password: string): Observable<UserModel | null> {
        const subject = new Subject();

        this._authClient
            .login(email, password)
            .subscribe(token => {
                return this.invalidateAccessToken(token).subscribe(updatedUser => subject.next(updatedUser));
            });

        return subject;
    }

    private tryGetLocalAccessToken(): string | null {
        return window.localStorage.getItem(AuthService.TOKEN_KEY);
    }

    private invalidateAccessToken(token: string): Observable<UserModel | null> {
        // const user = new UserModel(1, 'Ivan', 'Kalita', 'input.txt@hotmail.com', new Date('1995-09-08'), '123asdfa', '');
        // this._user = user;
        // return Observable.of(user);
        return this._authClient
            .getUser(token)
            .map(user => {
                if (user) {
                    this._user = user;
                    window.localStorage.setItem(AuthService.TOKEN_KEY, token);
                } else {
                    this._user = null;
                    this.removeAuthToken();
                }

                return user;
            });
    }

    removeAuthToken() {
        window.localStorage.removeItem(AuthService.TOKEN_KEY);
    }
}
