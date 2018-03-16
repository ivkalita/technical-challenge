import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';
import { ResultsClient } from '../../services/results.client';
import { GeneticResultModel } from '../../models/genetic-result.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    private _loading = false;
    private results: GeneticResultModel = null;

    constructor(private _authService: AuthService,
                private _resultsClient: ResultsClient) {
        this._resultsClient.getResults(this._authService.token)
            .subscribe(
                results => this.onLoadResults(results),
                err => this._loading = false
            );
    }

    get user(): UserModel {
        return this._authService.user;
    }

    get loading(): boolean {
        return this._loading;
    }

    onLoadResults(results: GeneticResultModel[]) {
        this.results = results.length > 0 ? results[0] : null;
        this._loading = false;
    }
}
