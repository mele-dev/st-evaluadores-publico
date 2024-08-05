import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Observable, of, lastValueFrom } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor(private jwthelper: JwtHelperService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.handle(request, next);
  }

  handle(request: HttpRequest<unknown>, next: HttpHandler) {
    // no uso tokenGetter pq tiene q ser síncrono esto.
    const token = localStorage.getItem('token');

    if (!token) {
      return next.handle(request);
    }

    const headers = request.headers.set('Authorization', `bearer ${token}`);
    const requestclone = request.clone({ headers });

    return next.handle(requestclone);
  }
}

