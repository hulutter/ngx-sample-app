import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: Http) {
    console.log(`The following url has been registered as ApiRoot: ${this.baseUrl}`);
  }

  requestResource(resourcePath: string): Observable<any> {
    const resourceUrl = this.baseUrl + resourcePath;
    return this.http
               .get(resourceUrl)
               .map(response => response.json())
               .catch(error => this.handleError(error, resourcePath));
  }

  private handleError (error: Response | any, resourcePath: string): Observable<any> {
    const result = (error instanceof Response) ? error.json() : error;
    const message = `Requesting the resource '${resourcePath}' an error occurred.`;
    console.error(message, result);
    return Observable.throw(message);
  }
}
