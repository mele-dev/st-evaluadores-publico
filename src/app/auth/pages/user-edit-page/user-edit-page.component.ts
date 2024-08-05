import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserAndPassword } from '../../User';
import { UsersService } from '../../users.service';
import { ViewChild } from '@angular/core';
import { PasswordRequiredModalComponent } from '../../reusable-components/password-required-modal/password-required-modal.component';
import { AuthenticationRuleValidationService } from '../../authentication-rule-validation.service';
import { CardModalComponent } from '../../../shared/components/card-modal/card-modal.component';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrl: './user-edit-page.component.css'
})
export class UserEditPageComponent implements OnInit {
  User?: User;
  UserUpdate?: UserAndPassword;
  confirmPassword = "";
  private routeSub?: Subscription;
  userFetched = false;
  @ViewChild('confirmModal') updatePasswordConfirmationModal!: PasswordRequiredModalComponent;
  @ViewChild('deleteModal') deleteModal!: CardModalComponent;
  @ViewChild('confirmDeletionModal') deletionPasswordCOnfirmationModal!: PasswordRequiredModalComponent;
  private errorMessage = "";

  getErrorMessage() {
    return this.errorMessage;
  }

  showModal(): void {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    modal.showModal();
  }

  constructor(
    private route: ActivatedRoute,
    private UsersService: UsersService,
    private router: Router,
    public ruleValidationService: AuthenticationRuleValidationService
  ) { }

  // From: https://stackoverflow.com/questions/42839074/extract-id-from-url-using-angular-2-till-latest
  async ngOnInit(): Promise<void> {
    this.routeSub = this.route.params.subscribe(params => {
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      const id = Number(params['id']);
      this.updateId(id);
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  validConfirmPassword() {
    return this.UserUpdate?.password === this.confirmPassword;
  }

  private async updateId(id: number) {
    this.User = await this.UsersService.getUserById(id) ?? undefined;
    if (this.User) {
      this.UserUpdate = { ...this.User, password: "" };
    }
    this.userFetched = true;
  }

  validForm(): boolean {
    if (!this.UserUpdate) {
      return false;
    }

    return this.ruleValidationService.passwordIsValid(this.UserUpdate.password)
      && this.ruleValidationService.emailIsValid(this.UserUpdate.email)
      && this.ruleValidationService.usernameIsValid(this.UserUpdate.username);
  }

  confirmDeletion() {
    this.deleteModal.close();
    this.deletionPasswordCOnfirmationModal.open()
  }

  async deleteAccount(oldPassword: string) {
    if (!this.User) {
      return;
    }

    const loginResponse = await this.UsersService.Login(
      this.User.email,
      oldPassword
    );


    if (!loginResponse) {
      this.deletionPasswordCOnfirmationModal.setError("Contraseña incorrecta.");
      return;
    }

    await this.UsersService.DeleteUser(this.User.id);
    location.reload();
  }

  async submit(oldPassword: string) {
    if (!this.User || !this.UserUpdate) {
      return;
    }

    if (!this.validForm()) {
      this.errorMessage = "Datos incorrectos."
      this.updatePasswordConfirmationModal.close();
    }

    const loginResponse = await this.UsersService.Login(
      this.User.email,
      oldPassword
    );


    if (!loginResponse) {
      this.updatePasswordConfirmationModal.setError("Contraseña incorrecta.");
      return;
    }

    const updateResponse = await this.UsersService.UpdateUser(this.UserUpdate);

    if (!updateResponse) {
      this.updatePasswordConfirmationModal.setError("Ha ocurrido un error actualizando su cuenta.");
      return;
    }
    this.updatePasswordConfirmationModal.close();

    // location.reload();
  }
}
