import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EmailComponent } from './email/email.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showModal = false;
  isResumePage = false;
  isEmailPage = false;

  @ViewChild(EmailComponent, { static: false }) private emailComponent!: EmailComponent;

  handleToggle(event: { show: boolean; isResume: boolean; isEmail: boolean }) {
    this.showModal = event.show;
    this.isResumePage = event.isResume;
    this.isEmailPage = event.isEmail;
  }
  handleClearForm() {
    if (this.emailComponent) {
      this.emailComponent.clearEmailForm();
    }
  }
}
