import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/data';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.html'
})
export class ProductDetailComponent {
    productTitle: string;

    constructor(route: ActivatedRoute) {
        this.productTitle = route.snapshot.params['prodTitle'];
    }

    @Input() product!: Product;
}