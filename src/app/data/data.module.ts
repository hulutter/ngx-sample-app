import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './services/api.service';
import {UserService} from './services/user.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ApiService, UserService]
})
export class DataModule {
}
