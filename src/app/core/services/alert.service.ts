import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  ) { }
  

  // dispara el popup de aviso recibiendo el titulo, el cuerpo y el icono
  public alertNotification(title: string, body: string, icon: SweetAlertIcon ) {

    Swal.fire({
      title: title,
      text: body,
      icon: icon,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3B82F6'
    })

  }

  // dispara el popup de pregunta recibiendo el titulo, el cuerpo y el icono retornando la promesa con la respuesta de la pregunta
  public alertQuestion(title: string, body: string, icon: SweetAlertIcon): Promise<SweetAlertResult<any>> {

    return  Swal.fire({
              title: title,
              text: body,
              icon: icon,
              showCancelButton: true,
              confirmButtonColor: '#3B82F6',
              cancelButtonColor: 'black',
              confirmButtonText: 'Aceptar',
              cancelButtonText: 'Cancelar',
            })

  }


  
}