import { Injectable } from '@angular/core';
import { BaseRequestOptions, Http, RequestMethod, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiClient {
    constructor(private _http: Http) {
    }

    get(url: string, params?: Object, token?: string): Observable<Response> {
        return this.createRequest({method: RequestMethod.Get, url, search: this.toURLSearchParams(params)}, token);
    }

    post(url: string, data: object, token?: string): Observable<Response> {
        return this.createRequest({method: RequestMethod.Post, url, body: data}, token);
    }

    private createRequest(options: RequestOptionsArgs, token?: string, withContentTypeJson = true): Observable<Response> {
        const opts = new BaseRequestOptions();

        if (withContentTypeJson) {
            opts.headers.set('Content-Type', 'application/json');
        }

        if (token) {
            opts.headers.set('Authorization', `Token ${token}`);
        }

        opts.withCredentials = true;

        return this._http.request(options.url, opts.merge(options));
    }

    private toURLSearchParams(params): URLSearchParams {
        const searchParams = new URLSearchParams();

        for (const key in params) {
            if (!params.hasOwnProperty(key)) {
                continue;
            }
            searchParams.set(key, params[key]);
        }

        return searchParams;
    }
}
