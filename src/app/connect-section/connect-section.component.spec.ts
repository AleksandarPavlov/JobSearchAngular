import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSectionComponent } from './connect-section.component';

describe('ConnectSectionComponent', () => {
  let component: ConnectSectionComponent;
  let fixture: ComponentFixture<ConnectSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectSectionComponent]
    });
    fixture = TestBed.createComponent(ConnectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
