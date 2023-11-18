import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fido-details1',
  templateUrl: './fido-details1.component.html',
  styleUrls: ['./fido-details1.component.css'],
})
export class FidoDetails1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<FidoDetails1Component>) {}

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
