import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { AppCommonModule } from 'app/common/common.module';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, AppCommonModule],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
