import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsProjectsComponent } from './cvs-projects.component';

describe('CvsProjectsComponent', () => {
  let component: CvsProjectsComponent;
  let fixture: ComponentFixture<CvsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvsProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
