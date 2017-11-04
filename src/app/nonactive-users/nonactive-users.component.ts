import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service"; (UsersService)

@Component({
  selector: 'app-nonactive-users',
  templateUrl: './nonactive-users.component.html',
  styleUrls: ['./nonactive-users.component.css']
})
export class NonactiveUsersComponent implements OnInit {
  users: string[];

  constructor (private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number){
    this.usersService.setToActive(id);
  }


}
