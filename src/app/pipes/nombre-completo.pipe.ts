import { Pipe, PipeTransform } from '@angular/core';

import { IRandomContact } from '../models/randomuser';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(contacto: IRandomContact, ...args: unknown[]): string {
    return `${contacto.name.title} ${contacto.name.first} ${contacto.name.last}`;
  }
}
