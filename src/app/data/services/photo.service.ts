import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {Album} from '../entities/album.entity';
import {Photo} from '../entities/photo.entity';

@Injectable()
export class PhotoService {

  constructor(private api: ApiService) {
  }

  getPhoto(photoId: number): Observable<Photo> {
    const resourcePath = `/photos/${photoId}`;
    return this.api.requestResource(resourcePath);
  }

  getPhotosOfAlbum(albumId: number): Observable<Photo[]> {
    const resourcePath = `/albums/${albumId}/photos`;
    return this.api.requestResource(resourcePath);
  }

  getAlbumsOfUser(userId: number): Observable<Album[]> {
    const resourcePath = `/users/${userId}/albums`;
    return this.api.requestResource(resourcePath);
  }
}
