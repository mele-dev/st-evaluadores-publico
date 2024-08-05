import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MainAdminPageComponent } from './pages/main-admin-page/main-admin-page.component';
import { adminGuard } from '../auth/guards/admin.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [adminGuard],
    canActivateChild: [adminGuard],
    children: [
      {
        path: "grades",
        loadChildren: () => import("./grades/grades.module").then(m => m.GradesModule),
      },
      {
        path: "",
        component: MainAdminPageComponent,
      },
    ]},
    {
      path: "test",
      loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule),
    },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
