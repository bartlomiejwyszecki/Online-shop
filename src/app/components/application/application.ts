import { Component, ViewEncapsulation } from '@angular/core';
//import { Product, ProductService } from '../../data/data'; - usunąć jak będzie działać

@Component({
    selector: 'auction-app',
    templateUrl: './application.html',
    styleUrls: ['./application.css'],
    encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent {
/*  products: Array<Product> = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
*/
}