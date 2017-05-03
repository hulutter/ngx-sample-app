import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataModule} from './data/data.module';
import {API_SERVICE_CONFIG, ApiServiceConfig} from './data/services/api.service';
import {RouterModule} from '@angular/router';
import {UsersModule} from './features/users/users.module';
import {PhotosModule} from './features/photos/photos.module';
import {AppRoutes} from './app.routes';

// Api Configuration
const API_CONFIG: ApiServiceConfig = {
  baseUrl: 'http://jsonplaceholder.typicode.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    UsersModule,
    PhotosModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {provide: API_SERVICE_CONFIG, useValue: API_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
