import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cvs-details2',
  templateUrl: './cvs-details2.component.html',
  styleUrls: ['./cvs-details2.component.css'],
})
export class CvsDetails2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<CvsDetails2Component>) {}

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

