import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverurl="http://localhost:8080/nurserydb"

  constructor(private http:HttpClient) { }
  AddNewProduct(r:FormData):Observable<Product>
  {
    return this.http.post<Product>(this.serverurl+"/product",r)
  }
  getAll():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.serverurl+"/product")
  }
  delete(productId:any):Observable<any>
  {
    return this.http.delete<any>(this.serverurl+"/product/"+productId)

  }
}
