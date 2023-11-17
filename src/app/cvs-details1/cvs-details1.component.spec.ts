import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsDetails1Component } from './cvs-details1.component';

describe('CvsDetails1Component', () => {
  let component: CvsDetails1Component;
  let fixture: ComponentFixture<CvsDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvsDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvsDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
