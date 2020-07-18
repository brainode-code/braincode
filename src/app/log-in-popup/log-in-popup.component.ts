import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-popup',
  templateUrl: './log-in-popup.component.html',
  styleUrls: ['./log-in-popup.component.scss']
})
export class LogInPopupComponent implements OnInit {

  title:string="Log in"
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPopup() {
    this.show = !this.show;
  }


}
