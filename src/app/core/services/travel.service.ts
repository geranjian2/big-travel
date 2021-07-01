import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { ResponseServer, Travel } from '../models/';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  uriBigTravel = `${environment.apiBigTavel}/`;
  constructor(private http: HttpClient) { }

  getAll(){
      return this.http.get<ResponseServer>(`${this.uriBigTravel}ships`).pipe(
        map(response =>  response.data)
      );
  }
}
