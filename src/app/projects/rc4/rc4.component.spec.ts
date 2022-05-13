import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rc4Component } from './rc4.component';

describe('Rc4Component', () => {
  let component: Rc4Component;
  let fixture: ComponentFixture<Rc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
