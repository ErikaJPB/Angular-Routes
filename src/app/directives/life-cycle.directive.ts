import {
  Directive,
  OnDestroy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appLifeCycle]',
})
export class LifeCycleDirective implements OnInit, OnChanges, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    this.LifeCycle('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.LifeCycle('OnChanges');
  }

  ngOnDestroy(): void {
    this.LifeCycle('OnDestroy');
  }

  LifeCycle(hook: string, changes?: SimpleChanges) {
    console.log(`CICLO DE VIDA: ${hook}`);
    if (changes) {
      console.log('CAMBIOS : ', changes);
    }
  }
}
