import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminlogin } from '../models/adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  serverurl="http://localhost:8080/nurserydb"
  constructor(private http:HttpClient) { }
  login(em:any,ps:any):Observable<Adminlogin>
  {
    return this.http.get<Adminlogin>(this.serverurl+"/admin/"+em+"/"+ps)
  }
}
