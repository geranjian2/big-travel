import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { User } from '@src/app/core/models/user';
import { ResponseServer } from '@src/app/core/models/response';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uriBigTravel = `${environment.apiBigTavel}/`;
  currentUserSubject: BehaviorSubject<User>;
  user:User;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  }); 

  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  public getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public setCurrentUserValue(user) {
    this.currentUserSubject.next(user);
    localStorage.setItem('user',JSON.stringify(user));
  } 

  login(request):Observable<User> {
    try {
      return this.httpClient.post<User>(`${this.uriBigTravel}auth/login`, request, { headers: this.headers });
    } catch (error) {
      console.error('Error al loguear el Usuario', error);
    }
  }
  register(request):Observable<ResponseServer> {
    try {
      return this.httpClient.post<ResponseServer>(`${this.uriBigTravel}auth/register`, request, { headers: this.headers });
    } catch (error) {
      console.error('Error al loguear el Usuario', error);
    }
  }
}
