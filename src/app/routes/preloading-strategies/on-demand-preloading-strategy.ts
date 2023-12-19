import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, mergeMap } from 'rxjs';
import {
  PreloadingService,
  PreloadingOptions,
} from 'src/app/services/preloading.service';

@Injectable({
  providedIn: 'root',
})
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private _preloadOnDemandOptions$: Observable<PreloadingOptions>;

  constructor(private _preloadingService: PreloadingService) {
    this._preloadOnDemandOptions$ = this._preloadingService.options$;
  }

  private _decideToPreload(
    route: Route,
    preloadingOptions: PreloadingOptions
  ): boolean {
    // Si:
    // 1. La ruta tiene data
    // 2. La data tiene la propiedad preload
    // 3. La ruta esta incluida en una lista de rutas que queremos precargar
    //  4. Las opciones tienen preload en true
    // Se pueden anadir mas condiciones personalizadas.

    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload // true
    );
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Estamos escuchando los valores de opciones de precarga emitidos por el next() del servicio.
    return this._preloadOnDemandOptions$.pipe(
      // Iteramos por cada valor recibido en el servicio con el next().
      mergeMap((preloadingOptions: PreloadingOptions) => {
        // Comprobamos si se debe cargar o no esa ruta bajo estas opciones
        const preload: boolean = this._decideToPreload(
          route,
          preloadingOptions
        );
        // Mostramos por consola si se precarga o no el modulo

        console.log(
          `${preload ? '' : 'no'} se precarga el modulo de la ruta ${
            route.path
          }`
        );

        // Devolvemos la ejecucion del callback load() o nada.

        return preload ? load() : EMPTY;
      })
    );
  }
}
