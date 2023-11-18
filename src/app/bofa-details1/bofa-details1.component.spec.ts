import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaDetails1Component } from './bofa-details1.component';

describe('BofaDetails1Component', () => {
  let component: BofaDetails1Component;
  let fixture: ComponentFixture<BofaDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
