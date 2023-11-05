import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css'],
})
export class RecentProjectsComponent implements OnInit {
  employers = [
    { id: 'cvs', name: 'CVS Health' },
    { id: 'aetna', name: 'Aetna Insurance' },
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
