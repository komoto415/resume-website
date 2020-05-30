import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompToAlgoComponent } from './comp-to-algo.component';

describe('CompToAlgoComponent', () => {
  let component: CompToAlgoComponent;
  let fixture: ComponentFixture<CompToAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompToAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompToAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
