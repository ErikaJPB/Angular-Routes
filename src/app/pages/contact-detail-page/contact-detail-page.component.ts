import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vamos a leer los parametros de la ruta

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }
}
