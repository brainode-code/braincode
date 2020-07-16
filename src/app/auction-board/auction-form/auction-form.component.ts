import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-auction-form",
  templateUrl: "./auction-form.component.html",
  styleUrls: ["./auction-form.component.scss"],
})
export class AuctionFormComponent implements OnInit {
  @Input() newAuction;
  @Output() onChange = new EventEmitter();
  @Output() onCloseClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireOnChangeEvent(e) {
    this.onChange.emit(e);
  }
  fireCloseFormEvent(e) {
    this.onCloseClick.emit(e);
  }
}
