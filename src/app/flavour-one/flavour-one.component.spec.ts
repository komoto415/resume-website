import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourOneComponent } from './flavour-one.component';

describe('FlavourOneComponent', () => {
  let component: FlavourOneComponent;
  let fixture: ComponentFixture<FlavourOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
