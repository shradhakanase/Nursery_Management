import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialog,
  MAT_DIALOG_DATA,

} from '@angular/material/dialog';

import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { FileHandle } from '../models/file-handle';
@Component({
  selector: 'app-show-product-images-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatGridListModule, CommonModule],
  templateUrl: './show-product-images-dialog.component.html',
  styleUrl: './show-product-images-dialog.component.css'
})
export class ShowProductImagesDialogComponent implements OnInit {
   file: any;
  ngOnInit(): void {
    this.receiveImages();
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  receiveImages() {
    console.log(this.data);
  }
}
