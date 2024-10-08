import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductService } from '../service/product.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Product } from '../models/product';

import { ImageProcessingService } from '../service/image-processing.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatGridListModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
buynow(productId:any) {
  this.router.navigate(["/order",{productId:productId}]);
}
  productDetails:any=[];
  ngOnInit(): void {
    this.getAll();
  }
  constructor(private productService:ProductService,private imageProcessingService:ImageProcessingService,private router:Router){}
  public getAll(){
    this.productService.getAll()
    .pipe(map((x:Product[],i)=>x.map((product:Product)=>this.imageProcessingService.createImages(product))))
      .subscribe(
      (resp:Product[])=>{
        console.log(resp);
        this.productDetails=resp;
      }, (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }
  showProductDetails(productId:any){
    this.router.navigate(["/viewDetails",{productId:productId}]);
  }
}
