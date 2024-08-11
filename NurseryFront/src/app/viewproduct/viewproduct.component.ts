import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { HttpErrorResponse } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from '../service/image-processing.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-viewproduct',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatDialogModule],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{
 productDetails:Product[]=[];
  displayedColumns: string[] = ['Product Id', 'Product Name', 'Product Description', 'product Actual Price','product Discounted Price','Images','Edit','Delete'];

  constructor(private productService:ProductService,public imagesDialog: MatDialog,public imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    this.getAllProduct();
  }
public getAllProduct(){
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


deleteProduct(productId:any){
  this.productService.delete(productId).subscribe(
    (resp)=>{
     this.getAllProduct();
    }, (error:HttpErrorResponse)=>{
      console.log(error);
    }
  );
}

showImages(product:Product){
  console.log(product);
  this.imagesDialog.open(ShowProductImagesDialogComponent,{
    data:{
      images:product.productImages
    },
    height: '500px',
  width: '800px',
  });
}

}
