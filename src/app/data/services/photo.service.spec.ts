import {TestBed, inject} from '@angular/core/testing';

import {API_SERVICE_CONFIG, ApiService, ApiServiceConfig} from './api.service';
import {DataModule} from '../data.module';
import {PhotoService} from './photo.service';

const API_CONFIG: ApiServiceConfig = {
  baseUrl: 'http://test-svc.com'
};

let ApiSvc: ApiService,
    PhotoSvc: PhotoService;

describe('PhotoService', () => {
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

  beforeEach(inject([ApiService, PhotoService], (apiService: ApiService, photoService: PhotoService) => {
    ApiSvc = apiService;
    PhotoSvc = photoService;

    spyOn(apiService, 'requestResource');
  }));

  describe('getPhoto(photoId)', () => {
    const photoId = 0;
    const photoResourcePath = `/photos/${photoId}`;

    it(`should call 'ApiService.requestResource()' using the resourcePath '${photoResourcePath}'`, () => {
      expect(ApiSvc.requestResource).not.toHaveBeenCalled();
      PhotoSvc.getPhoto(photoId);
      expect(ApiSvc.requestResource).toHaveBeenCalledWith(photoResourcePath);
    });
  });

  describe('getPhotosOfAlbum(albumId)', () => {
    const albumId = 0;
    const albumResourcePath = `/albums/${albumId}/photos`;

    it(`should call 'ApiService.requestResource()' using the resourcePath '${albumResourcePath}'`, () => {
      expect(ApiSvc.requestResource).not.toHaveBeenCalled();
      PhotoSvc.getPhotosOfAlbum(albumId);
      expect(ApiSvc.requestResource).toHaveBeenCalledWith(albumResourcePath);
    });
  });

  describe('getAlbumsOfUser(userId)', () => {
    const userId = 0;
    const userAlbumsResourcePath = `/users/${userId}/albums`;

    it(`should call 'ApiService.requestResource()' using the resourcePath '${userAlbumsResourcePath}'`, () => {
      expect(ApiSvc.requestResource).not.toHaveBeenCalled();
      PhotoSvc.getAlbumsOfUser(userId);
      expect(ApiSvc.requestResource).toHaveBeenCalledWith(userAlbumsResourcePath);
    });
  });
});
