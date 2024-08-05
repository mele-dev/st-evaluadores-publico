import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesLayoutComponent } from './pages/grades-layout/grades-layout.component';
import { GradesListPageComponent } from './pages/grades-list-page/grades-list-page.component';
import { GradesShowPageComponent } from './pages/grades-show-page/grades-show-page.component';
import { GradesModifyPageComponent } from './pages/grades-modify-page/grades-modify-page.component';
import { GradesCreatePageComponent } from './pages/grades-create-page/grades-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: GradesLayoutComponent,
    children: [
      {
        path: '',
        component: GradesListPageComponent,
      },
      {
        path: 'search',
        component: GradesShowPageComponent
      },
      {
        path: 'modify/:id',
        component: GradesModifyPageComponent
      },
      {
        path: 'create',
        component: GradesCreatePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
