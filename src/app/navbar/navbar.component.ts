import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();

  isEmailPage: boolean = false;

  isModalOpen = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEmailPage = event.urlAfterRedirects.includes('/email');
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
    this.toggle.emit();
  }
}
