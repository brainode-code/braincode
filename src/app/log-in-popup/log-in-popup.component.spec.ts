import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPopupComponent } from './log-in-popup.component';

describe('LogInPopupComponent', () => {
  let component: LogInPopupComponent;
  let fixture: ComponentFixture<LogInPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
