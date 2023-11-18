import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aetna-details2',
  templateUrl: './aetna-details2.component.html',
  styleUrls: ['./aetna-details2.component.css']
})
export class AetnaDetails2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<AetnaDetails2Component>) {}

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
