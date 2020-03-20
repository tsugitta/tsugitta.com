import { Component, OnInit } from '@angular/core';
import { Contribution, products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent {
  public products = products.sort((a, b) => (a.date < b.date ? 1 : -1));
}
