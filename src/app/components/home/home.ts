import { Component } from '@angular/core';
import { Product, ProductService } from '../../data/data';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {
    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}