import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { PreloadingService } from 'src/app/services/preloading.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  private _preloadingService = inject(PreloadingService);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  /**
   * Metodo encargado de precargar un modulo del sistema de rutas de la aplicacion
   * @param route Ruta para precargar el modulo
   */

  preloadModule(route: string) {
    this._preloadingService.startPreload(route);
  }
}
