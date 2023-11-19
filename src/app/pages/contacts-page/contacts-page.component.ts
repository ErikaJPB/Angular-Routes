import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  listaContactos: IContacto[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'García',
      email: 'juan@gmail.com',
    },
    {
      id: 2,
      nombre: 'María',
      apellidos: 'González',
      email: 'maria@gmail',
    },
    {
      id: 3,
      nombre: 'Luis',
      apellidos: 'Gómez',
      email: 'luis@gmail.com',
    },
    {
      id: 4,
      nombre: 'Ana',
      apellidos: 'Martín',
      email: 'ana@gmail.com',
    },
    {
      id: 5,
      nombre: 'José',
      apellidos: 'Rodríguez',
      email: 'jose@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
