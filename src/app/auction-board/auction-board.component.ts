import { Component, OnInit } from '@angular/core';
import { Auction } from './auction';
@Component({
  selector: 'app-auction-board',
  templateUrl: './auction-board.component.html',
  styleUrls: ['./auction-board.component.scss'],
})
export class AuctionBoardComponent implements OnInit {
  auctions: Auction[] = [];
  newAuction = new Auction('', 0, '', '');
  isFormVisible = false;
  constructor() {}

  ngOnInit(): void {}

  formVisibility(e) {
    e.preventDefault();
    this.isFormVisible = !this.isFormVisible;
  }

  addNewAuction(e) {
    const { title, maxValue, description, deadline } = this.newAuction;

    const auction = new Auction(title, maxValue, description, deadline);

    this.auctions.push(auction);

    this.formVisibility(e);
    this.newAuction = new Auction('', 0, '', '');
    console.log(this.auctions);
  }
}
