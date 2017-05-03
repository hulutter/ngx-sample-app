import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './services/api.service';
import {UserService} from './services/user.service';
import {HttpModule} from '@angular/http';
import {PhotoService} from './services/photo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ApiService,
    PhotoService,
    UserService
  ]
})
export class DataModule {
}
