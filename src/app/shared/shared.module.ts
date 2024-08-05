import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModalComponent } from './components/card-modal/card-modal.component';
import { LoginLogoutComponent } from './components/login-logout/login-logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardModalComponent,
    LoginLogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardModalComponent,
    LoginLogoutComponent
  ]
})
export class SharedModule { }
