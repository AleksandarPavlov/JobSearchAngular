import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFieldsComponent } from './jobs-fields.component';

describe('JobsFieldsComponent', () => {
  let component: JobsFieldsComponent;
  let fixture: ComponentFixture<JobsFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsFieldsComponent]
    });
    fixture = TestBed.createComponent(JobsFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
