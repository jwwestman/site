import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css'],
})
export class RecentProjectsComponent implements OnInit {
  employers = [
    { id: 'fido', name: 'Fidelity Investments' },
    { id: 'bofa', name: 'Bank of America' },
    { id: 'aetna', name: 'Aetna' },
    { id: 'cvs', name: 'CVS Health' },
  ];
  selectedEmployerId: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.selectedEmployerId = 'cvs';
  }

  onSelectEmployer(id: string): void {
    this.selectedEmployerId = id;
  }
}
