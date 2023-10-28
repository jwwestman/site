import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showModal = false;
  isResumePage = false;
  isEmailPage = false;

  handleToggle(event: { show: boolean, isResume: boolean, isEmail: boolean }) {
    this.showModal = event.show;
    this.isResumePage = event.isResume;
    this.isEmailPage = event.isEmail;
  }
}
