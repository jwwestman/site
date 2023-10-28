import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();

  // Introduce a local state to track if the modal is open
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.toggle.emit();
  }
}
