import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetnaDetails1Component } from './aetna-details1.component';

describe('AetnaDetails1Component', () => {
  let component: AetnaDetails1Component;
  let fixture: ComponentFixture<AetnaDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AetnaDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AetnaDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
