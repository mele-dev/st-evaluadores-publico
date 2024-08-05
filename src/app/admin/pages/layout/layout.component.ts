import { Component, inject } from '@angular/core';
import { User } from '../../../auth/User';
import { UsersService } from '../../../auth/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private userService = inject(UsersService);
  private router = inject(Router);

  get user() {
    return this.userService.user;
  }

  async logOff() {
    await this.userService.doLogout();
    this.router.navigate(["/home"]);
  }
}
