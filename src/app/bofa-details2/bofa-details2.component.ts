import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bofa-details2',
  templateUrl: './bofa-details2.component.html',
  styleUrls: ['./bofa-details2.component.css'],
})
export class BofaDetails2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<BofaDetails2Component>) {}

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
