import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
  
  defaultImage = 'https://image.flaticon.com/icons/png/128/1994/1994425.png'; 
  
  constructor(private http: HttpClient ) {}
  
  transform(image: string): any {
    

    return this.http
      .get(image, {
        responseType: 'blob',
      })
      .pipe(
        mergeMap((blob: { size: number; type: string }) => {
          if (blob.type === 'image/png') {
            return of(image);
          } else {
            return of(this.defaultImage);
          }
        }),
        catchError(error => {
          return of(this.defaultImage);
        }),
      );
  }

}
