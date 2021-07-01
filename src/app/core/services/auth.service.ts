import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { User } from '@src/app/core/models/user';
import { ResponseServer } from '@src/app/core/models/response';
import { AlertService } from './alert.service';
import { MESSAGESS_ENUM } from '../data/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uriBigTravel = `${environment.apiBigTavel}/`;
  currentUserSubject: BehaviorSubject<User>;  
  user:User;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _alertService: AlertService,
    ) { 
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  public  getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public setCurrentUserValue(user) {
    this.currentUserSubject.next(user);
     
    localStorage.setItem('user',JSON.stringify(user));
  } 

  login(request):Observable<User> {
    try {
      return this.httpClient.post<ResponseServer>(`${this.uriBigTravel}auth/login`, request)
      .pipe(map(response =>{
            if(!response.ok){
              this._alertService.alertInfo(MESSAGESS_ENUM.LOGIN_INCORRECT);
              return;
            }
            const { token,user } = response.data;
            localStorage.setItem('token',token); 
            this.setCurrentUserValue(user);
            this.router.navigate(['/']); 
            return user as User;
        }));
    } catch (error) {
      console.error('Error al loguear el Usuario', error);
    }
  }



  register(request):Observable<ResponseServer> {
    try {
      return this.httpClient.post<ResponseServer>(`${this.uriBigTravel}auth/register`, request).pipe(
        map(response=>{
          if(response.ok){
            this._alertService.alertSuccess(response.msn);
            this.router.navigate(['/login']); 
          }else{
            this._alertService.alertInfo(response.msn);
          }
          return response;
        }),
        catchError(err => {
          console.log(err);
          return throwError('Error pers');
        })
      );
    } catch (error) {
      console.error('Error al loguear el Usuario', error);
    }
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
