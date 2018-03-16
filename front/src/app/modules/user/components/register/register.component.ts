import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    private _form: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService,
                private _router: Router) {
        this.createForm();
    }

    get form(): FormGroup {
        return this._form;
    }

    get firstName(): FormControl {
        return this._form.get('firstName') as FormControl;
    }

    get lastName(): FormControl {
        return this._form.get('lastName') as FormControl;
    }

    get email(): FormControl {
        return this._form.get('email') as FormControl;
    }

    get password(): FormControl {
        return this._form.get('password') as FormControl;
    }

    get dob(): FormControl {
        return this._form.get('dob') as FormControl;
    }

    get policyCode(): FormControl {
        return this._form.get('policyCode') as FormControl;
    }

    private createForm() {
        this._form = this._formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            dob: [null, [Validators.required]],
            policyCode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
        });
    }

    submit(): boolean {
        if (!this._form.valid) {
            return false;
        }

        const userData = new UserModel(
            null,
            this.firstName.value,
            this.lastName.value,
            this.email.value,
            new Date(this.dob.value),
            this.policyCode.value,
            this.password.value
        );

        this._authService
            .register(userData)
            .subscribe(user => {
                console.log(user);
                this._router.navigate(['/user/']);
            });


        return false;
    }

}
