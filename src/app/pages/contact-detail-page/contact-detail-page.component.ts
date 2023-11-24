import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contacto: IContacto | any;
  filtroPrevio: string = 'todos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vamos a leer los parametros de la ruta

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    // Vamos a leer del state el contacto

    if (history.state.data) {
      this.contacto = history.state.data;
    }

    if (history.state.filtro) {
      this.filtroPrevio = history.state.filtro;
    }
  }
}
