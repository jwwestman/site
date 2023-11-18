import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aetna-details1',
  templateUrl: './aetna-details1.component.html',
  styleUrls: ['./aetna-details1.component.css']
})
export class AetnaDetails1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<AetnaDetails1Component>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  scrollToTop(): void {
    const dialogContainer = document.querySelector('.mat-dialog-container');
    if (dialogContainer instanceof HTMLElement) {
      dialogContainer.scrollTop = 0;
    }
  }
}