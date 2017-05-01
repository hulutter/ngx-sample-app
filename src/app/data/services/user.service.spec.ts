import {TestBed, inject} from '@angular/core/testing';

import {UserService} from './user.service';
import {DataModule} from '../data.module';
import {API_SERVICE_CONFIG, ApiService, ApiServiceConfig} from './api.service';

const API_CONFIG: ApiServiceConfig = {
  baseUrl: 'http://test-svc.com'
};

let ApiSvc: ApiService,
    UserSvc: UserService;

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: API_CONFIG}
      ]
    });
  });

  beforeEach(inject([ApiService, UserService], (apiService: ApiService, userService: UserService) => {
    ApiSvc = apiService;
    UserSvc = userService;

    spyOn(apiService, 'requestResource');
  }));

  describe('getUsers()', () => {
    const usersResourcePath = '/users';

    it(`should call 'ApiService.requestResource()' using the resourcePath '${usersResourcePath}'`, () => {
      expect(ApiSvc.requestResource).not.toHaveBeenCalled();
      UserSvc.getUsers();
      expect(ApiSvc.requestResource).toHaveBeenCalledWith(usersResourcePath);
    });
  });
});
