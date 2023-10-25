import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetnaComponent } from './aetna.component';

describe('AetnaComponent', () => {
  let component: AetnaComponent;
  let fixture: ComponentFixture<AetnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AetnaComponent]
    });
    fixture = TestBed.createComponent(AetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
