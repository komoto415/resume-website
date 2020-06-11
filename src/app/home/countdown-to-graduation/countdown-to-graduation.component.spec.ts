import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownToGraduationComponent } from './countdown-to-graduation.component';

describe('CountdownToGraduationComponent', () => {
  let component: CountdownToGraduationComponent;
  let fixture: ComponentFixture<CountdownToGraduationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownToGraduationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownToGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
