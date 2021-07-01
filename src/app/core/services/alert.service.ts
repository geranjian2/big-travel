import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertDanger(message:string) {
    Swal.fire({
      icon: 'error',
      title: 'Cuidado',
      text: message,
    });
  }

  alertSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: 'Proceso exitoso!',
      text: message,
    });
  }

  alertInfo(message) {
    Swal.fire({
      icon: 'warning',
      title: '',
      text: message,
    });
  }

}
