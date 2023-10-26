import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) {
    this.onResize();
  }

  headerText: string = 'Julie Westman, UX Professional';
  bioText: string =
    'I design and code beautifully simple things, and I love what I do.';

  ngOnInit(): void {}

  onButtonClick() {
    this.sharedService.triggerModal();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const width = window.innerWidth;


  if (width <= 700) {
      this.headerText = 'Julie Westman';
      this.bioText = 'I design beautifully simple things.';
    } else {
      this.headerText = 'Julie Westman, UX Professional';
      this.bioText =
        'I design and code beautifully simple things, and I love what I do.';
    }
  }
}
