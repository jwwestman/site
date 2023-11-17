import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cvs-details1',
  templateUrl: './cvs-details1.component.html',
  styleUrls: ['./cvs-details1.component.css'],
})
export class CvsDetails1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<CvsDetails1Component>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
