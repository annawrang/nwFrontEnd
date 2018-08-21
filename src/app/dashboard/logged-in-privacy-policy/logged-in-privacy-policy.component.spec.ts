import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInPrivacyPolicyComponent } from './logged-in-privacy-policy.component';

describe('LoggedInPrivacyPolicyComponent', () => {
  let component: LoggedInPrivacyPolicyComponent;
  let fixture: ComponentFixture<LoggedInPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
