import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedService } from '../shared.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  isMobile = false;
  staticTitle = 'Julie Westman';

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 500;
  }

  dynamicTitles = [
    'Senior UX Professional',
    'Digital Strategist 💻',
    'Product Owner 📈',
    'Fashionista 👜',
    'Doodle Owner 🐶',
  ];
  currentTitleIndex = 0;
  showTitle = true;

  private interval: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.onResize();
    this.startAnimation();

    this.sharedService.showModal$.subscribe(() => {
      const modalElement = document.getElementById('connectModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found!');
      }
    });
  }
  onButtonClick() {
    this.sharedService.triggerModal();
  }
  startAnimation() {
    this.interval = setInterval(() => {
      this.showTitle = false;

      setTimeout(() => {
        this.currentTitleIndex++;

        if (this.currentTitleIndex === this.dynamicTitles.length) {
          clearInterval(this.interval); // Stop the loop when all titles have been shown.
          this.currentTitleIndex = 0; // Reset to the first title.
        }

        this.showTitle = true;
      }, 1000); // 1s for the fade out transition
    }, 2000); // Change title every 2 seconds (1 second visible + 1 second for the fade-out transition)
  }

  onAnimationEvent(event: any): void {
    if (event.toState === 'void' && this.currentTitleIndex === 0) {
      clearInterval(this.interval);
    }
  }
}
