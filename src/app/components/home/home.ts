import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product, ProductService } from '../../data/data';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {
    products: Product[] = [];
    filterCriteria: string = '';
    titleFilter: FormControl = new FormControl();

        constructor(private productService: ProductService) {
            this.products = this.productService.getProducts();
            this.titleFilter.valueChanges.pipe(
                debounceTime(100), distinctUntilChanged())
                .subscribe(
                    value => this.filterCriteria = value,
                    error => console.error(error));
        }

}