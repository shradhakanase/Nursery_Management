import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminlogin } from '../models/adminlogin';
import { AdminloginService } from '../service/adminlogin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adm:Adminlogin=new Adminlogin()
  constructor(private as:AdminloginService,private router:Router)
  {

  }
submitdata(adform:any)
{
  if(adform.valid){
this.as.login(this.adm.email,this.adm.password).subscribe((data:Adminlogin)=>{
  if(data!=null)
    {
      alert("Login successful")
      localStorage.setItem("aemail","admin@gmail.com")
      this.router.navigate(["/"])

    }
})
  }else{
    alert("Please input valid data")
  }
}
}
