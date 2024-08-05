import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../auth/User';
import { UsersService } from '../../../auth/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluators-layout',
  templateUrl: './evaluators-layout.component.html',
  styleUrl: './evaluators-layout.component.css'
})
export class EvaluatorsLayoutComponent {

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
