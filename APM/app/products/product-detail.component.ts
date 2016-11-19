import {Component} from '@angular/core';
import {IProduct} from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailsComponent {
    pageTitle: string= 'Product Details';
    product: IProduct;
}
