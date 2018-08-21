import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInTermsCondComponent } from './logged-in-terms-cond.component';

describe('LoggedInTermsCondComponent', () => {
  let component: LoggedInTermsCondComponent;
  let fixture: ComponentFixture<LoggedInTermsCondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInTermsCondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInTermsCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
