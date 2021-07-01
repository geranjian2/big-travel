import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es'
@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(date: string, format: string = 'YYYY-MM-DD HH:mm:ss'): string {

  let dateMoment =  moment(date, format).fromNow();
  let newFormatDate = '';

    if(dateMoment == 'Invalid date'){
      newFormatDate = 'Sin Fecha';
    }else{
      newFormatDate =dateMoment;
    }
    return newFormatDate;
  }

}
