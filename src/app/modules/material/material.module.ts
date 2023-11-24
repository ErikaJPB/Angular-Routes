import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos exportados de Angular Material

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatInputModule, MatCardModule],
})
export class MaterialModule {}
