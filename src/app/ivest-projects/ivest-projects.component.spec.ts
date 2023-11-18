import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestProjectsComponent } from './ivest-projects.component';

describe('IvestProjectsComponent', () => {
  let component: IvestProjectsComponent;
  let fixture: ComponentFixture<IvestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
