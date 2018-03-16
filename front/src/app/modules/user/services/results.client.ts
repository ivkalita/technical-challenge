import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiClient } from '../../core/services/api.client';
import { GeneticResultSerializer } from '../serializers/genetic-result.serializer';
import { GeneticResultModel } from '../models/genetic-result.model';

@Injectable()
export class ResultsClient {
    constructor(private _apiClient: ApiClient,
                private _resultSerializer: GeneticResultSerializer) {
    }

    getResults(token: string): Observable<GeneticResultModel[]> {
        // return Observable.of([
        //    new GeneticResultModel(1, new Date(), {
        //        'Cancer': 'very low',
        //        'Canavan disease': 'low',
        //        'Cystic fibrosis': 'average',
        //        'Familial dysautonomia': 'above the average',
        //        'Sickle cell disease': 'low',
        //        'Tay-Sachs disease': 'very low'
        //    })
        // ]);
        return this._apiClient
            .get('/genetics/api/v1/results/', null, token)
            .map(response => response.json().map(item => this._resultSerializer.fromJSON(item)));
    }
}