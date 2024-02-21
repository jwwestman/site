import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AetnaDetails1Component } from '../aetna-details1/aetna-details1.component';
import { AetnaDetails2Component } from '../aetna-details2/aetna-details2.component';

@Component({
  selector: 'app-aetna-projects',
  templateUrl: './aetna-projects.component.html',
  styleUrls: ['./aetna-projects.component.css'],
})
export class AetnaProjectsComponent implements OnInit {
  private correctPassword: string = 'SavvyJ';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailsModal(): void {
    const dialogRef = this.dialog.open(AetnaDetails1Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDetails2Modal(): void {
    const dialogRef = this.dialog.open(AetnaDetails2Component, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
