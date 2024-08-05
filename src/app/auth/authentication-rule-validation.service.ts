import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRuleValidationService {
  private defaultUsernameErrorMessage =
    "Los nombres de usuario deben tener entre 1 y 30 caracteres inclusive";

  private defaultPasswordErrorMessage =
    "Las contraseñas deben ser de entre 8 y 20 caracteres inclusive.";

  getDefaultUsernameErrorMessage() {
    return this.defaultUsernameErrorMessage;
  }

  getDefaultPasswordErrorMessage() {
    return this.defaultPasswordErrorMessage;
  }

  emailIsValid(email: string): boolean {
    return !(new FormControl(email, Validators.email).hasError("email"))
      && email.length !== 0;
  }

  usernameIsValid(username: string) {
    const length = username.length;
    return length >= 1 && length <= 30;
  }

  passwordIsValid(password: string) {
    const length = password.length;
    return length >= 8 && length <= 20;
  }
}
