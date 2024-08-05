import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestListPageComponent } from './pages/test/pages/test-list-page/test-list-page.component';
import { TestListItemComponent } from './pages/test/components/test-list-item/test-list-item.component';
import { TestFormComponent } from './pages/test/components/test-form/test-form.component';
import { TestModule } from './pages/test/test.module';
import { SharedModule } from '../shared/shared.module';
import { MainAdminPageComponent } from './pages/main-admin-page/main-admin-page.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MainAdminPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    TestModule,
    SharedModule
  ]
})
export class AdminModule { }
