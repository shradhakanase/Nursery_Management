import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOrder } from '../models/product-order';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {
serverurl="http://localhost:8080/nurserydb"
  constructor(private http:HttpClient) { }
  insert(r:Order):Observable<Order>
  {
    return this.http.post<Order>(this.serverurl+"/order",r)
  }
  getAll():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.serverurl+"/order")
  }
  getAllByProductId(p:any):Observable<ProductOrder[]>
  {
    return this.http.get<ProductOrder[]>(this.serverurl+"/order/"+p)
  }
}
