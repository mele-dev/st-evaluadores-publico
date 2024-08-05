import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './layout/layout.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent,
      },
      {
        path: "register",
        component: RegisterPageComponent,
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: 'full',
      },
    ],
  },
  {
    path: "list",
    component: ListUsersComponent
  },
  {
    path: "modify/:id",
    component: UserEditPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule,
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
