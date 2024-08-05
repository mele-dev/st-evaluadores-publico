import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesCreatePageComponent } from './pages/grades-create-page/grades-create-page.component';
import { GradesModifyPageComponent } from './pages/grades-modify-page/grades-modify-page.component';
import { GradesShowPageComponent } from './pages/grades-show-page/grades-show-page.component';
import { GradesListPageComponent } from './pages/grades-list-page/grades-list-page.component';
import { GradesLayoutComponent } from './pages/grades-layout/grades-layout.component';
import { GradesFormComponent } from './components/grades-form/grades-form.component';
import { FormsModule } from '@angular/forms';
import { GradesCardComponent } from './components/grades-card/grades-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GradesCreatePageComponent,
    GradesModifyPageComponent,
    GradesShowPageComponent,
    GradesListPageComponent,
    GradesLayoutComponent,
    GradesFormComponent,
    GradesCardComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GradesModule { }
