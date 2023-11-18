import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CvsDetails1Component } from '../cvs-details1/cvs-details1.component';
import { CvsDetails2Component } from '../cvs-details2/cvs-details2.component';

@Component({
  selector: 'app-cvs-projects',
  templateUrl: './cvs-projects.component.html',
  styleUrls: ['./cvs-projects.component.css'],
})
export class CvsProjectsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailsModal(): void {
    const dialogRef = this.dialog.open(CvsDetails1Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDetails2Modal(): void {
    const dialogRef = this.dialog.open(CvsDetails2Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
