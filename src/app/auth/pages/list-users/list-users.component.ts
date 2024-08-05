import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  users?: User[];

  constructor (private userService: UsersService) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getAllUsers() ?? undefined;
  }
}
