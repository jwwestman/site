import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css'],
})
export class RecentProjectsComponent implements OnInit {
  employers = [
    { id: 'aetna', name: 'Aetna' },
    { id: 'bofa', name: 'Bank of America' },
    { id: 'cvs', name: 'CVS Health' },
    { id: 'fido', name: 'Fidelity' },
    { id: 'ivest', name: 'iVest' },
  ];
  selectedEmployerId: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.selectedEmployerId = 'aetna';
  }

  onSelectEmployer(id: string): void {
    this.selectedEmployerId = id;
  }
}
