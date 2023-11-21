import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaDetails2Component } from './bofa-details2.component';

describe('BofaDetails2Component', () => {
  let component: BofaDetails2Component;
  let fixture: ComponentFixture<BofaDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
