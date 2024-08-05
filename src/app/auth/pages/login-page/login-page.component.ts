import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { AuthenticationRuleValidationService } from '../../authentication-rule-validation.service';

// This is declared here since it should be encapsulated within
// LoginPageComponent. Putting it within an external file would
// give it a wider scope than convenient.
enum LoginStatus {
  NotTried = 0,
  Attempting = 1,
  Failed = 2,
  Success = 3
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})

export class LoginPageComponent {
  email = "";
  password = "";
  status: LoginStatus = LoginStatus.NotTried;


  constructor(
    private usersService: UsersService,
    private router: Router,
    public ruleValidationService: AuthenticationRuleValidationService
  ) { }

  public NotTriedToLogIn(): boolean {
    return this.status === LoginStatus.NotTried;
  }

  public AttemptingLogin(): boolean {
    return this.status === LoginStatus.Attempting;
  }

  public FailedLogin(): boolean {
    return this.status === LoginStatus.Failed;
  }

  public SuccessLogin(): boolean {
    return this.status === LoginStatus.Success;
  }

  public validForm(): boolean {
    return this.ruleValidationService.passwordIsValid(this.password)
      && this.ruleValidationService.emailIsValid(this.email);
  }

  public async submit(): Promise<void> {
    this.status = LoginStatus.Attempting;

    const response: boolean = await this.usersService.Login(this.email, this.password);

    this.status = response ? LoginStatus.Success : LoginStatus.Failed;

    if (response !== null) {
      if (this.usersService.ultimaRuta) {
        this.router.navigate([this.usersService.ultimaRuta]);
      } else {
        this.router.navigate(["/home"]);
      }
      console.info(`Autenticado con usuario: ${this.usersService.user?.username} isAdmin: ${this.usersService.user?.isAdmin}`);

    }
  }
}
