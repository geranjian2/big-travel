import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import {MESSAGESS_ENUM} from '../data/index';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _alertService:AlertService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;

    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
          
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
          this._alertService.alertInfo(MESSAGESS_ENUM.LOGIN_EXPIRED);
        }
        if (err.status === 500) {
          this._alertService.alertDanger(MESSAGESS_ENUM.SERVER_ERROR);
        }
        return throwError(err);
      })
    );
  }
}
