import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { adminGuard } from './auth/guards/admin.guard';
import { evaluatorGuard } from './auth/guards/evaluator.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
    canActivate: [adminGuard],
  },
  {
    path: "evaluators",
    loadChildren: () => import("./evaluators/evaluators.module").then(m => m.EvaluatorsModule),
    canActivate: [evaluatorGuard]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule { }
