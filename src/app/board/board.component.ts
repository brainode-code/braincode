import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {

  public visible: boolean;
  public arr: Array<any> = [];

  public add(): void {
    this.visible = true;
  }

  newArrHandler(newArr: any) {
    this.arr = newArr;
    // console.log(this.arr)
  }
}
