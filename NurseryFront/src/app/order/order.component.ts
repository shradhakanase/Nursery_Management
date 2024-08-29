import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../models/order';
import { OrderdetailsService } from '../service/orderdetails.service';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageProcessingService } from '../service/image-processing.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  ord: Order =new Order();
  
  constructor(private or:OrderdetailsService,private router: Router,public productService:ProductService,private imageProcessingService:ImageProcessingService){}
  
ngOnInit(): void {
 
}

submitdata(fbform:any) {
  if (fbform.valid) {
    this.or.insert(this.ord).subscribe((data: Order) => {
      if (data != null) {
        alert('Saved')
        this.router.navigate(["/"])
      }
    })
  } else {
    alert("Please input valid data")
  }
}

}
