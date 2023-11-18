import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsDetails2Component } from './cvs-details2.component';

describe('CvsDetails2Component', () => {
  let component: CvsDetails2Component;
  let fixture: ComponentFixture<CvsDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvsDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvsDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
