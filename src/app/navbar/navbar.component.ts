import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Update the date & time every second (1000ms)
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  onButtonClick() {
    this.sharedService.triggerModal();
  }
}
