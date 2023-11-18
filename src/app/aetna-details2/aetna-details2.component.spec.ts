import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetnaDetails2Component } from './aetna-details2.component';

describe('AetnaDetails2Component', () => {
  let component: AetnaDetails2Component;
  let fixture: ComponentFixture<AetnaDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AetnaDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AetnaDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
