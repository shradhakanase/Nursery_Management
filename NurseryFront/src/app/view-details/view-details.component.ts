import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../service/image-processing.service';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  product : Product[]=[] ;


constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    this.getAllProduct();
  }
  public getAllProduct(){
    this.productService.getAll()
    .pipe(map((x:Product[],i)=>x.map((product:Product)=>this.imageProcessingService.createImages(product))))
      .subscribe(
      (resp:Product[])=>{
        console.log(resp);
        
      }, (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

}
