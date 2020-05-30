import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComponentsComponent } from './class-components.component';

describe('ClassComponentsComponent', () => {
  let component: ClassComponentsComponent;
  let fixture: ComponentFixture<ClassComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
