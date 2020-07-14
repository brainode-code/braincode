import { Component, Output } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {

  public visible: boolean;
  public taskList: any;
  showContent: boolean = false;
  
  public add(): void {
   this.visible = true;
  }

  showTasks(tasks: any) {
    this.taskList = tasks;
    this.showContent = true;
  }
}
