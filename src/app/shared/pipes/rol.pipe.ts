import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

  transform(rol_id: number): string {

    if (rol_id === 1){
      return 'Normal';
    }
    return 'Administrador';

  }

}