export class GeneticResultModel {
    constructor(private _id: number,
                private _createdAt: Date,
                private _result: object) {
    }

    get id(): number {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get result(): Object {
        return this._result;
    }

    get factors(): string[] {
        const keys = [];
        for (const x in this._result) {
            if (!this._result.hasOwnProperty(x)) {
                continue;
            }
            keys.push(x);
        }

        return keys;
    }

    factorValue(factor: string) {
        return this._result[factor];
    }
}