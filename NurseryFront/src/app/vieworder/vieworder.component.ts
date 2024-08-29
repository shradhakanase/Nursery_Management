import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../service/orderdetails.service';
import { Order } from '../models/order';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { ProductOrder } from '../models/product-order';

@Component({
  selector: 'app-vieworder',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './vieworder.component.html',
  styleUrl: './vieworder.component.css'
})
export class VieworderComponent implements OnInit {
  ngOnInit(): void {
    this.getAll();
    
  }
  constructor(private orderService:OrderdetailsService){}
  orderDetails:Order[]=[];

  
  displayedColumns: string[] = ['Id','Name','Address','Contact','Quantity'];
  public getAll(){
    this.orderService.getAll().subscribe(
      (resp:Order[])=>{
        console.log(resp);
        this.orderDetails=resp;
      }, (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }
  
}
