import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auction-board",
  templateUrl: "./auction-board.component.html",
  styleUrls: ["./auction-board.component.scss"],
})
export class AuctionBoardComponent implements OnInit {
  auctions = [];
  newAuction = {
    title: "",
    maxValue: 0,
    description: "",
    deadline: "",
    remainingTime: null,
    expired: false,
  };
  isFormVisible = false;
  constructor() {}

  ngOnInit(): void {}

  formVisibility(e) {
    e.preventDefault();
    this.isFormVisible = !this.isFormVisible;
    console.log(this.isFormVisible);
  }

  change(e) {
    this.newAuction[e.target.name] = e.target.value;
  }

  addNewAuction(e) {
    const {
      title,
      maxValue,
      description,
      deadline,
      remainingTime,
      expired,
    } = this.newAuction;
    const auction = {
      title,
      maxValue,
      description,
    };
    this.auctions.push(auction);
    console.log(this.auctions);
  }
}
