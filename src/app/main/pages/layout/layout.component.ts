import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../../auth/users.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private userService = inject(UsersService);

  get user() {
    return this.userService.user;
  }
}
