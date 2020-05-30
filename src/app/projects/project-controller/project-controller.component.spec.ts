import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectControllerComponent } from './project-controller.component';

describe('ProjectControllerComponent', () => {
  let component: ProjectControllerComponent;
  let fixture: ComponentFixture<ProjectControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
