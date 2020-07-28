import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionBoardComponent } from './auction-board.component';

describe('AuctionBoardComponent', () => {
  let component: AuctionBoardComponent;
  let fixture: ComponentFixture<AuctionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
