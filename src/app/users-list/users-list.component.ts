import { Component, Input, OnInit } from '@angular/core';
import {User} from '../app.component'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];

  selectedUser: User | null = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
    this.selectedUser = this.users[1];
  }

}
