import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WegoServicesComponent } from './wego-services.component';

describe('WegoServicesComponent', () => {
  let component: WegoServicesComponent;
  let fixture: ComponentFixture<WegoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WegoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WegoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
