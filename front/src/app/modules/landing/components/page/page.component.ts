import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    get userLoggedIn() {
        return this._authService.user !== null;
    }

    register() {
        return this._router.navigate(['/user/register']);
    }

    goToProfile() {
        return this._router.navigate(['/user']);
    }
}
