import {TestBed, inject} from '@angular/core/testing';

import {API_SERVICE_CONFIG, ApiService, ApiServiceConfig} from './api.service';
import {DataModule} from '../data.module';
import {Http, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

const API_CONFIG: ApiServiceConfig = {
  baseUrl: 'http://test-svc.com'
};

const sampleData = {
  property: 'VALUE'
};

let ApiSvc: ApiService,
    HttpSvc: Http,
    MockBackendSvc: MockBackend;

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: API_CONFIG},
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  beforeEach(inject([ApiService, Http, XHRBackend], (apiService: ApiService, http: Http, mockBackend: MockBackend) => {
    ApiSvc = apiService;
    HttpSvc = http;
    MockBackendSvc = mockBackend;
  }));

  describe('requestResource(resourcePath)', () => {
    it('should call the correct resource url', () => {
      spyOn(HttpSvc, 'get').and.callThrough();
      const sampleResourcePath = '/users';
      const expectedResourceUrl = API_CONFIG.baseUrl + sampleResourcePath;

      ApiSvc.requestResource(sampleResourcePath);
      expect(HttpSvc.get).toHaveBeenCalledWith(expectedResourceUrl);
    });

    it('should provide a json response', () => {
      let result;

      MockBackendSvc.connections.subscribe((connection: MockConnection) => {
        const responseOptions = new ResponseOptions({body: sampleData});
        connection.mockRespond(new Response(responseOptions));
      });

      ApiSvc.requestResource('')
            .subscribe(data => {
              result = data;
            });

      expect(result).toEqual(sampleData);
    });

    it('should catch errors and provide a custom error message', () => {
      const path = '/test';
      const errorMsg = `Requesting the resource '${path}' an error occurred.`;

      MockBackendSvc.connections
                    .subscribe((connection: MockConnection) => {
                      connection.mockError(new Error());
                    });

      let result;

      ApiSvc.requestResource(path)
            .subscribe(() => {}, error => { result = error; });

      expect(result).toEqual(errorMsg);
    });
  });
});
