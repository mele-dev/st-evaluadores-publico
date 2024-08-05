import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { User, UserCreationInfo } from '../../User';

enum RegistrationStatus {
  NotTried = 0,
  Attempting = 1,
  Failed = 2,
  Success = 3
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})

export class RegisterPageComponent {
  creationInfo: UserCreationInfo = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  };

  creationResponse?: User;

  confirmPassword = "";

  status: RegistrationStatus = RegistrationStatus.NotTried;

  constructor(private UsersService: UsersService, private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  public NotTriedToRegister(): boolean {
    return this.status === RegistrationStatus.NotTried;
  }

  public AttemptingRegistration(): boolean {
    return this.status === RegistrationStatus.Attempting;
  }

  public SuccessRegistration(): boolean {
    return this.status === RegistrationStatus.Success;
  }

  public FailedRegistration(): boolean {
    return this.status === RegistrationStatus.Failed;
  }

  public passwordsMatch(): boolean {
    return this.creationInfo.password === this.confirmPassword;
  }

  public validatePasswordLength() {
    const password = this.creationInfo.password;
    return password.length >= 8 && password.length <= 20;
  }

  public invalidUsername(): boolean {
    const usernameControl = new FormControl(
      this.creationInfo.username, [
      Validators.required,
      // Validators.pattern('^[a-zA-Z0-9]+$'),
    ]);

    return usernameControl.hasError("required") || usernameControl.hasError("pattern");
  }

  public invalidEmail(): boolean {
    const emailControl = new FormControl(
      this.creationInfo.email, [
      Validators.required,
      Validators.email,
    ]);
    return emailControl.hasError("required") || emailControl.hasError("email");
  }

  public invalidConfirmPassword(): boolean {
    const confirmPasswordControl = new FormControl(
      this.confirmPassword, [
      Validators.required,

    ]);

    return confirmPasswordControl.hasError("required");
  }

  public validForm(): boolean {
    return this.validatePasswordLength()
      && !this.invalidUsername()
      && !this.invalidEmail()
      && !this.invalidConfirmPassword();
  }

  public async submit(): Promise<void> {
    this.status = RegistrationStatus.Attempting;

    if (!this.passwordsMatch()) {
      this.status = RegistrationStatus.Failed;
      return;
    }

    const response = await this.UsersService.registerUser(this.creationInfo);
    this.creationResponse = response ?? undefined;

    this.status =
      response ?
        RegistrationStatus.Success
        : RegistrationStatus.Failed;

    if (response) {
      this.router.navigate(["/auth/login"]);
    }
  }
}


