import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../service/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  con: Contact = new Contact();
  constructor(private cs: ContactService, private router: Router) {

  }
  submitdata(cform: any) {
    if (cform.valid) {
      this.cs.insert(this.con).subscribe((data: Contact) => {
        if (data != null) {
          alert('Saved')
          this.router.navigate(["/login"])
        }
      })
    }else{
      alert("Please input valid data")
    }
  }
}
