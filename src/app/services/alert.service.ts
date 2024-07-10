import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  success(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      confirmButtonText: 'Ok',
    });
  }

  error(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonText: 'Ok',
    });
  }

  warning(message: string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: message,
      confirmButtonText: 'Ok',
    });
  }

  info(message: string): void {
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: message,
      confirmButtonText: 'Ok',
    });
  }
}
