import { Component, ViewEncapsulation } from '@angular/core';
import { Product, ProductService } from '../../services/data';

@Component({
    selector: 'auction-app',
    templateUrl: './application.hmtl',
    styleUrls: ['./application.css'],
    encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
    products: Array<Product> = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}