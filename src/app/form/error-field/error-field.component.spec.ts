import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldComponent } from './error-field.component';

describe('FieldErrorDisplayComponent', () => {
  let component: ErrorFieldComponent;
  let fixture: ComponentFixture<ErrorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
