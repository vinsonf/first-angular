import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent implements OnInit {
  title = 'first-angular';
  users: User[] = [{name: 'test1'}, {name: 'test2'}];
  filteredUsers: User[] = [];
  searchTerm = '';

  ngOnInit() {}

  findUsers() {
    this.filteredUsers = this.users.filter(user => {
      return user.name.includes(this.searchTerm);
    });
  }

}
