import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetnaProjectsComponent } from './aetna-projects.component';

describe('AetnaProjectsComponent', () => {
  let component: AetnaProjectsComponent;
  let fixture: ComponentFixture<AetnaProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AetnaProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AetnaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
