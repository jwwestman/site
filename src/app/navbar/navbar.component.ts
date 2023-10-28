import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<{ show: boolean, isResume: boolean, isEmail: boolean }>();

  isEmailPage: boolean = false;

  isModalOpen = false;

  isResumePage: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEmailPage = event.urlAfterRedirects.includes('/email');
        this.isResumePage = event.urlAfterRedirects.includes('/resume');
      }
    });
  }

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.isEmailPage = url[0]?.path === 'email';
    });
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.toggle.emit({ show: this.isModalOpen, isResume: this.isResumePage, isEmail: this.isEmailPage });
  }
}
