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
      title: 'Éxito',
      text: message,
      confirmButtonText: 'Aceptar',
    });
  }

  async confirm(message: string): Promise<boolean> {
    const result = await Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: message,
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    });

    return result.isConfirmed;
  }

  error(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonText: 'Aceptar',
    });
  }

  warning(message: string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Alerta',
      text: message,
      confirmButtonText: 'Aceptar',
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
