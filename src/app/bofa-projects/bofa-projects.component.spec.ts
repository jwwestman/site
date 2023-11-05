import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BofaProjectsComponent } from './bofa-projects.component';

describe('BofaProjectsComponent', () => {
  let component: BofaProjectsComponent;
  let fixture: ComponentFixture<BofaProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BofaProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BofaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
