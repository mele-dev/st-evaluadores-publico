import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
