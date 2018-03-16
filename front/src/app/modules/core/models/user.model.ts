export class UserModel {
    constructor(private _id: number | null,
                private _firstName: string,
                private _lastName: string,
                private _email: string,
                private _dob: Date,
                private _policyCode: string,
                private _password?: string) {
    }


    get id(): number | null{
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }

    get dob(): Date {
        return this._dob;
    }

    get policyCode(): string {
        return this._policyCode;
    }

    get password(): string {
        return this._password;
    }
}
