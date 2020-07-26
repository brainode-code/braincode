import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-log-in-popup',
  templateUrl: './log-in-popup.component.html',
  styleUrls: ['./log-in-popup.component.scss']
})
export class LogInPopupComponent implements OnInit {

  public title = 'Log in';
  public show = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showPopup(): void {
    this.show = !this.show;
  }
}
