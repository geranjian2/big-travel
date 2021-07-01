import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  uriBigTravel = `${environment.apiBigTavel}/`;
  constructor(private http: HttpClient) {}

  errorServer():Observable<any> {
      return this.http.get(`${this.uriBigTravel}errorServer`)
  }

  expiredToken():Observable<any> {
    return this.http.get(`${this.uriBigTravel}expiredToken`)
}
}
