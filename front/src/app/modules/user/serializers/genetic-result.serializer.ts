import { Injectable } from '@angular/core';

import { GeneticResultModel } from '../models/genetic-result.model';

@Injectable()
export class GeneticResultSerializer {

    toJSON(value: GeneticResultModel): any {
        return null;
    }

    fromJSON(value: any): GeneticResultModel {
        return new GeneticResultModel(
            value.pk,
            new Date(value.created_at),
            value.result
        );
    }
}
