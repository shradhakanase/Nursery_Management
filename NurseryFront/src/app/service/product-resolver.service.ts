import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {

  constructor(private productService: ProductService, private imageProcessingService: ImageProcessingService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = route.paramMap.get("productId");
    if (id) {
      return this.productService.getProductDetailById(id)
        .pipe(map(p => this.imageProcessingService.createImages(p)));
    } else {
      return of(this.getAll());
    }
  }
  getAll(): any {
   return {
    productId:null,
    productName:"",
    productDescription:"",
    productDiscountedPrice:0,
    productActualPrice:0,
    productImages:[]
   }
  }

}
