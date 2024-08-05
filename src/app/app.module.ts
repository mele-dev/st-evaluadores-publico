import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AppHttpInterceptorService } from './http/app-http-interceptor.service';
import { AdminModule } from './admin/admin.module';
import { TestModule } from './admin/pages/test/test.module';
import { SharedModule } from './shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    }),
    AdminModule,
    TestModule,
    SharedModule,
    BrowserModule,
    CKEditorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
