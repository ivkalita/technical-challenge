import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../modules/core/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    get userLoggedIn() {
        return this._authService.user !== null;
    }

    register() {
        this._router.navigate(['/user/register']);
    }

    login() {
        this._router.navigate(['/user/login']);
    }

    logout() {
        this._authService.logout();
        this._router.navigate(['/']);
    }
}
