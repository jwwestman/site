import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityProjectsComponent } from './fidelity-projects.component';

describe('FidelityProjectsComponent', () => {
  let component: FidelityProjectsComponent;
  let fixture: ComponentFixture<FidelityProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidelityProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidelityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
