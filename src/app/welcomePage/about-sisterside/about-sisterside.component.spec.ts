import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSistersideComponent } from './about-sisterside.component';

describe('AboutSistersideComponent', () => {
  let component: AboutSistersideComponent;
  let fixture: ComponentFixture<AboutSistersideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSistersideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSistersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
