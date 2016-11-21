import {Component, OnInit, OnDestroy} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
    pageTitle: string= 'Product Details';
    product: IProduct;
    private sub: Subscription;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        // let id = +this._route.snapshot.params['id'];
        // this.pageTitle += ` : ${id}`;
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });

    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
