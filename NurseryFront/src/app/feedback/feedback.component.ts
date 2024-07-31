import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../service/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  fb: Feedback = new Feedback();
  constructor(private fs: FeedbackService, private router: Router) {

  }
  submitdata(fbform: any) {
    if (fbform.valid) {
      this.fs.insert(this.fb).subscribe((data: Feedback) => {
        if (data != null) {
          alert('Saved')
          this.router.navigate(["/"])
        }
      })
    }
    else{
      alert("Please input valid data")
    }
  }
}
