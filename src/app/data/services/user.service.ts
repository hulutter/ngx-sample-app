import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../entities/user.entity';

@Injectable()
export class UserService {

  constructor(private api: ApiService) {
  }

  getUsers(): Observable<User[]> {
    const resourcePath = '/users';
    return this.api.requestResource(resourcePath);
  }
}
