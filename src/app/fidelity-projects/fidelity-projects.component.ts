import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FidoDetails1Component } from '../fido-details1/fido-details1.component';

@Component({
  selector: 'app-fidelity-projects',
  templateUrl: './fidelity-projects.component.html',
  styleUrls: ['./fidelity-projects.component.css'],
})
export class FidelityProjectsComponent implements OnInit {

  private correctPassword: string = 'SavvyJ';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailsModal(): void {
    const password = prompt('Please enter the password:');
    if (password === this.correctPassword) {
      const dialogRef = this.dialog.open(FidoDetails1Component, {
        width: '100%',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      alert('Incorrect password!');
    }
  }
}
