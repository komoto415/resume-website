import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWebsiteComponent } from './resume-website.component';

describe('ResumeWebsiteComponent', () => {
  let component: ResumeWebsiteComponent;
  let fixture: ComponentFixture<ResumeWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
