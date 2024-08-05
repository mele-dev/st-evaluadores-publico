import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../../auth/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrl: './login-logout.component.css'
})
export class LoginLogoutComponent {

  private userService = inject(UsersService);
  private router = inject(Router);

  get user() {
    return this.userService.user;
  }

  async logOut(): Promise<void> {
    await this.userService.doLogout();
    this.router.navigate(["/home"]);
    // .then(() => {
    //   // If the window wasn't reloaded each time, when loging off from "/home"
    //   // this button wouldn't update, since the ngOnInit wouldn't be called each
    //   // time. And neither would every other component that depends on the local
    //   // storage.
    //   window.location.reload();
    // });
  }
}
