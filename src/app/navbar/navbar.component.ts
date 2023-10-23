import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private sharedService: SharedService) {}

  onButtonClick() {
    this.sharedService.triggerModal();
  }
}
