import { Component, OnInit } from '@angular/core';
import { Auction } from './auction';
import { interval, Observable, of, isObservable } from 'rxjs';
@Component({
  selector: 'app-auction-board',
  templateUrl: './auction-board.component.html',
  styleUrls: ['./auction-board.component.scss'],
})
export class AuctionBoardComponent implements OnInit {
  public auctions: Auction[] = [];
  public newAuction = new Auction(0, '', 0, '', '');
  public isFormVisible = false;

  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    if(this.auctions.length > 0) {
      source.subscribe(itr => {
        this.auctions.map(auction => {
          auction.remainingTimeCount(auction.deadline).subscribe(val => {
            auction.remainingTime = of(val);
          })
        })
      })
    }
  }

  public formVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  public addNewAuction(e): void {
    const { title, maxValue, description, finishDate } = e;
    const id = Math.floor(Math.random() * 10000);
    const auction = new Auction(id, title, maxValue, description, finishDate);
    this.auctions.push(auction);
    this.formVisibility();

    this.newAuction = new Auction(0, '', 0, '', '');
    this.ngOnInit();
  }

  public isObservable(deadline: string | Observable<string>): boolean {
    return isObservable(deadline) ? true : false;
  }

  public onSubmit(id:number, comment: number){
    this.auctions.forEach(auction => {
      if(auction.id === id) {
        auction.comments.push(comment);
      }
    });
    return this.ngOnInit();
  }
}
