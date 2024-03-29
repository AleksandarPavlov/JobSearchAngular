import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardsComponent } from './job-cards.component';

describe('JobCardsComponent', () => {
  let component: JobCardsComponent;
  let fixture: ComponentFixture<JobCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCardsComponent]
    });
    fixture = TestBed.createComponent(JobCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
