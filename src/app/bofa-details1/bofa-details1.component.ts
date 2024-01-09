import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bofa-details1',
  templateUrl: './bofa-details1.component.html',
  styleUrls: ['./bofa-details1.component.css'],
})
export class BofaDetails1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<BofaDetails1Component>) {}

  ngOnInit(): void {}

  scrollToTop(): void {
    const dialogContainer = document.querySelector('.mat-dialog-container');
    if (dialogContainer instanceof HTMLElement) {
      dialogContainer.scrollTop = 0;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
