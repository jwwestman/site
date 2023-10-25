import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaComponent } from './bofa.component';

describe('BofaComponent', () => {
  let component: BofaComponent;
  let fixture: ComponentFixture<BofaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BofaComponent]
    });
    fixture = TestBed.createComponent(BofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
