import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../data/data';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.html',
    styleUrls: ['./product-details.scss']
})
export class ProductDetailComponent {
    product: Product;
    reviews: Review[];
    @Input() hidden: boolean = true;
    show: string = 'Pokaż';
    starRating: number = 0;

    constructor(route: ActivatedRoute, productService: ProductService) {
        let prodId: number = parseInt(route.snapshot.params['productId']);
        this.product = productService.getProductById(prodId);

        this.reviews = productService.getReviewsForProduct(this.product.id);
    }

    toggleReviews() {
        this.hidden = !this.hidden;
        if (this.show === 'Pokaż') {
            this.show = 'Ukryj';
        } else if (this.show === 'Ukryj') {
            this.show = 'Pokaż';
        }
    }
}