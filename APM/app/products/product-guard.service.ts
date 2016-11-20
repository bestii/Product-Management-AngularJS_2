import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _route: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 0) {
            alert('Invalid Product ID');
            // start a new navigation to redirect to list page
            this._route.navigate(['/products']);
            // abort current navigation
            return false;
        }

        return true;
    }

}
