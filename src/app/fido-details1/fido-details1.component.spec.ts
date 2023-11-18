import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidoDetails1Component } from './fido-details1.component';

describe('FidoDetails1Component', () => {
  let component: FidoDetails1Component;
  let fixture: ComponentFixture<FidoDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidoDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidoDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
