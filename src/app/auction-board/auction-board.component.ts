import { Component, OnInit } from '@angular/core';
import { Auction } from './auction';
import { interval, Observable, of, isObservable } from 'rxjs';
@Component({
  selector: 'app-auction-board',
  templateUrl: './auction-board.component.html',
  styleUrls: ['./auction-board.component.scss'],
})
export class AuctionBoardComponent implements OnInit {
  auctions: Auction[] = [];
  newAuction = new Auction(0, '', 0, '', '');
  isFormVisible = false;
  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    if(this.auctions.length > 0) {
      source.subscribe(itr => {
        this.auctions.map(auction => {
          auction.remainingTimeCount(auction.deadline).subscribe(val => {
            // auction.remainingTime.subscribe(wal => wal = val);
            // auction.deadline = val;
            auction.remainingTime = val as unknown as Observable<string>;
          })
        })
      })
    }
  }

  formVisibility(e) {
    e.preventDefault();
    this.isFormVisible = !this.isFormVisible;
  }

  change(e) {
    this.newAuction[e.target.name] = e.target.value;
  }

  addNewAuction(e) {
    const { title, maxValue, description, deadline } = this.newAuction;
    const id = Math.floor(Math.random() * 10000);
    const auction = new Auction(id, title, maxValue, description, deadline);
    this.auctions.push(auction);
    this.formVisibility(e);
    this.newAuction = new Auction(0, '', 0, '', '');
  //   this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['Your actualComponent']);
  // }); 
  this.ngOnInit();
  }

  isObservable(deadline) {
    if(isObservable(deadline)) {
      return true
    } else {
       return false
    }
  }

  public onSubmit(id:number, comment: number){
    this.auctions.forEach(auction => {
      if(auction.id === id) {
        auction.comments.push(comment);
        console.log(auction.comments);
      }
    });
    console.log(this.auctions)
    return this.ngOnInit();
  }
}
