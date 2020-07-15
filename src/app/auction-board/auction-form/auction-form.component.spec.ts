import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionFormComponent } from './auction-form.component';

describe('AuctionFormComponent', () => {
  let component: AuctionFormComponent;
  let fixture: ComponentFixture<AuctionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
