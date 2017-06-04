import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule { }
