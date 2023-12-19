import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class PreloadingOptions {
  constructor(public routePath: string, public preload: boolean = true) {}
}

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  // Un subject es un tipo de observable que permite emitir valores a traves de su metodo next().
  // En este caso vamos a emitir un objeto de tipo PreloadingOptions que contendra la ruta y la opcion de precarga.
  // Vamos a estar subscritos y escuchando a este observable desde el interceptor de peticiones http.
  private _subject = new Subject<PreloadingOptions>();

  // Cualquier Subject puede ser tratado como un observable y es el que tenemos que hacer publico y con el vamos a ofrecer las opciones de la ruta que desea ser precargada.
  public options$ = this._subject.asObservable();

  constructor() {}

  /**
   * Metodo que va a comenzar la precarga.
   * @param routePath Ruta de la que queremos precargar el modulo.
   */
  startPreload(routePath: string) {
    // Creamos unas opciones de precarga
    const preloadOptions = new PreloadingOptions(routePath, true);

    // Emitimos las opciones que desean ser precargadas.
    // Esta informacion la va a escuchar la estrategia de precarga OnDemandPreloadingStrategy para asi evaluar si debe o no debe precargar la ruta.
    this._subject.next(preloadOptions);
  }
}
