import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ivest-projects',
  templateUrl: './ivest-projects.component.html',
  styleUrls: ['./ivest-projects.component.css'],
})
export class IvestProjectsComponent implements OnInit {
  private correctPassword: string = 'SavvyJ';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
