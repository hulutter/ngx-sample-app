import {Http} from '@angular/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export interface ApiServiceConfig {
  baseUrl: string;
}

export const API_SERVICE_CONFIG = new InjectionToken<ApiServiceConfig>('ApiConfig');

@Injectable()
export class ApiService {

  constructor(private http: Http, @Inject(API_SERVICE_CONFIG) private config: ApiServiceConfig) {
    console.log(`The following url has been registered as ApiRoot: ${this.config.baseUrl}`);
  }

  requestResource(resourcePath: string): Observable<any> {
    const resourceUrl = this.config.baseUrl + resourcePath;
    return this.http
               .get(resourceUrl)
               .map(response => response.json())
               .catch(error => this.handleError(error, resourcePath));
  }

  private handleError(error: Response | any, resourcePath: string): Observable<any> {
    const result = (error instanceof Response) ? error.json() : error;
    const message = `Requesting the resource '${resourcePath}' an error occurred.`;
    console.error(message, result);
    return Observable.throw(message);
  }
}
