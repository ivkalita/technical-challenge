import { CanActivate, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivateChild, CanActivate {
    constructor(private _authService: AuthService) {
    }

    canActivate(): Observable<boolean> {
        return this.isAuthenticated();
    }

    canActivateChild(): Observable<boolean> {
        return this.isAuthenticated();
    }

    isAuthenticated(): Observable<boolean> {
        return this._authService.restore().map(user => user !== null);
    }
}
