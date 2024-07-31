import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  reg: Register = new Register();
  constructor(private rs: RegisterService, private router: Router) {

  }
  submitdata(regfrm: any) {
    if (regfrm.valid) {
      this.rs.insert(this.reg).subscribe((data: Register) => {
        if (data != null) {
          alert('Registration Successful')
          this.router.navigate(["/login"])
        }
      })
    }

    else
      alert("Please input valid data")
  }
}
