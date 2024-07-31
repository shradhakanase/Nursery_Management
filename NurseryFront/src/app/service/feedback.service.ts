import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  serverurl="http://localhost:8080/nurserydb"

  constructor(private http:HttpClient) { }
  insert(r:Feedback):Observable<Feedback>
  {
    return this.http.post<Feedback>(this.serverurl+"/feedback",r)
  }
}
