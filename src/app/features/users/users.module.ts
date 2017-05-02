import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressLinePipe} from './user-list/address-line/address-line.pipe';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';

const usersRoutes: Routes = [
  {path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [
    AddressLinePipe,
    UserListComponent
  ]
})
export class UsersModule {
}
