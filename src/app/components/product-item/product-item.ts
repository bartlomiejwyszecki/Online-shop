import { Component, Input } from '@angular/core';
import { Product } from 'src/app/data/data';
import { StarsComponent } from 'src/app/components/stars/stars';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.html'
})
export class ProductItemComponent {
  @Input() product!: Product;
}
