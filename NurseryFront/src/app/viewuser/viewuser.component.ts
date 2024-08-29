import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-viewuser',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit {
  productDetails:Register[]=[];
  displayedColumns: string[] = ['Id','Name','Birth-Date','Contact','Address','Country','Email-Id','Password'];
  ngOnInit(): void {
    this.getAll();
  }
  constructor(private registerService:RegisterService){}
public getAll(){
  this.registerService.getAll().subscribe(
    (resp:Register[])=>{
      console.log(resp);
      this.productDetails=resp;
    }, (error:HttpErrorResponse)=>{
      console.log(error);
    }
  );
}
}
