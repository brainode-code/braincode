import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auction-board",
  templateUrl: "./auction-board.component.html",
  styleUrls: ["./auction-board.component.scss"],
})
export class AuctionBoardComponent implements OnInit {
  newAuction = {
    title: "",
    maxValue: 0,
    description: "",
    remainingTime: null,
    expired: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
