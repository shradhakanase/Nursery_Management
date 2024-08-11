import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileHandle } from '../models/file-handle';
import { DomSanitizer } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule,CommonModule,MatGridListModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{

onFileSelected(event:any) {
if(event.target.files){
  const file=event.target.files[0];

 const fileHandle: FileHandle={
  file:file,
  url:this.sanitizer.bypassSecurityTrustUrl(
    window.URL.createObjectURL(file)
  )
 }
 this.pro.productImages.push(fileHandle);
}
}
  pro: Product ={
    productName:"",
    productDescription:"",
    productDiscountedPrice:0,
    productActualPrice:0,
    productImages:[]
  }
  constructor(private ps: ProductService, private router: Router,private sanitizer:DomSanitizer) {

  }
  ngOnInit(): void {
   
  }
  submitdata(cform: any) {
    if (cform.valid) {
      const productFormData= this.prepareFormData(this.pro);
      this.ps.AddNewProduct(productFormData).subscribe((data: Product) => {
        if (data != null) {
          alert('Saved')
          this.router.navigate(["/"])
        }
      })
    }else{
      alert("Please input valid data")
    }
  }
  prepareFormData(pro:Product):FormData{
    const formData=new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(pro)], {type:'application/json'})
    );

    for(var i=0;i<pro.productImages.length;i++){
      formData.append(
        'imageFile',
        pro.productImages[i].file,
        pro.productImages[i].file.name
      );
    }
     return formData;

  }

  removeImages(i:number){
    this.pro.productImages.splice(i,1);
  }
}
