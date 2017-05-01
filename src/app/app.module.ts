import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataModule} from './data/data.module';
import {API_SERVICE_CONFIG, ApiServiceConfig} from './data/services/api.service';
import {RouterModule, Routes} from '@angular/router';
import {UsersModule} from './users/users.module';

// Api Configuration
const API_CONFIG: ApiServiceConfig = {
  baseUrl: 'http://jsonplaceholder.typicode.com'
};

// Routing Configuration
const defaultRoute = 'users';
const appRoutes: Routes = [
  {path: '**', redirectTo: defaultRoute}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    UsersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: API_SERVICE_CONFIG, useValue: API_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
