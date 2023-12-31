import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BofaDetails1Component } from '../bofa-details1/bofa-details1.component';
import { BofaDetails2Component } from '../bofa-details2/bofa-details2.component';

@Component({
  selector: 'app-bofa-projects',
  templateUrl: './bofa-projects.component.html',
  styleUrls: ['./bofa-projects.component.css'],
})
export class BofaProjectsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailsModal(): void {
    const dialogRef = this.dialog.open(BofaDetails1Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDetails2Modal(): void {
    const dialogRef = this.dialog.open(BofaDetails2Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
