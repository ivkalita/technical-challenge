import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserSerializer {

    toJSON(value: UserModel): any {
        const convertDate = date => date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        const data = {
            'first_name': value.firstName,
            'second_name': value.lastName,
            'email': value.email,
            'dob': convertDate(value.dob),
            'policy_code': value.policyCode
        };

        if (value.password) {
            data['password1'] = value.password;
            data['password2'] = value.password;
        }

        return data;
    }

    fromJSON(value: any): UserModel {
        return new UserModel(
            value.pk,
            value.first_name,
            value.second_name,
            value.email,
            new Date(value.dob),
            value.policy_code
        );
    }
}
