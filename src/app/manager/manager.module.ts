import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewManagerService } from './view-manager.service';

const managers = [
  ViewManagerService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: managers,
})
export class ManagerModule { }
