import { CanActivate, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class NotAuthenticatedGuard implements CanActivateChild, CanActivate {
    constructor(private _authService: AuthService) {
    }

    canActivate(): Observable<boolean> {
        return this.isNotAuthenticated();
    }

    canActivateChild(): Observable<boolean> {
        return this.isNotAuthenticated();
    }

    isNotAuthenticated(): Observable<boolean> {
        return Observable.of(this._authService.user === null);
    }
}
