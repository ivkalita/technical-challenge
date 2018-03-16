import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private _form: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService,
                private _router: Router) {
        this.createForm();
    }

    get form(): FormGroup {
        return this._form;
    }

    get email(): FormControl {
        return this._form.get('email') as FormControl;
    }

    get password(): FormControl {
        return this._form.get('password') as FormControl;
    }


    private createForm() {
        this._form = this._formBuilder.group({
            email: ['', [Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    submit(): boolean {
        if (!this._form.valid) {
            return false;
        }

        this._authService
            .login(this.email.value, this.password.value)
            .subscribe(user => {
                console.log(user);
                this._router.navigate(['/user/']);
            });


        return false;
    }
}
