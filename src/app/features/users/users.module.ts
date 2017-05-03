import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressLinePipe} from './user-list/address-line/address-line.pipe';
import {RouterModule} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UsersRoutes} from './users.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes)
  ],
  declarations: [
    AddressLinePipe,
    UserListComponent
  ]
})
export class UsersModule {
}
