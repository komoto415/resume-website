import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCactpotComponent } from './mini-cactpot.component';

describe('MiniCactpotComponent', () => {
  let component: MiniCactpotComponent;
  let fixture: ComponentFixture<MiniCactpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCactpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCactpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
