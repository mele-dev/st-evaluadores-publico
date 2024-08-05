import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { PasswordRequiredModalComponent } from './reusable-components/password-required-modal/password-required-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UserEditPageComponent,
    PasswordRequiredModalComponent,
    ListUsersComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AuthModule { }
