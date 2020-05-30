import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSweComponent } from './class-swe.component';

describe('ClassSweComponent', () => {
  let component: ClassSweComponent;
  let fixture: ComponentFixture<ClassSweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
