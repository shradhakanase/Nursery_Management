import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  serverurl="http://localhost:8080/nurserydb"

  constructor(private http:HttpClient) { }
  insert(r:Contact):Observable<Contact>
  {
    return this.http.post<Contact>(this.serverurl+"/contact",r)
  }
}
