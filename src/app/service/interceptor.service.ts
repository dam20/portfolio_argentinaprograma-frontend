import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.authenticationService.authenticatedUser;
    if (currentUser && currentUser.accessToken) {
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      });
    }
    console.log("El Servicio Interceptor esta Funcionando. " + JSON.stringify(currentUser.accessToken));
    console.log(req?.headers);
    return next.handle(req).pipe(
      catchError((error) => {
        console.log('Returning caught observabl');
        return throwError(error);
      })
    );
  }
}
