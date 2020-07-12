import { Component, Output } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {

  public visible: boolean;
  
  public add(): void {
   this.visible = true;
  }
}
