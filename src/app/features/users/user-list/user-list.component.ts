import { Component, OnInit } from '@angular/core';
import {User} from '../../../data/entities/user.entity';
import {UserService} from '../../../data/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService
        .getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }
}
