import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourTwoComponent } from './flavour-two.component';

describe('FlavourTwoComponent', () => {
  let component: FlavourTwoComponent;
  let fixture: ComponentFixture<FlavourTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
