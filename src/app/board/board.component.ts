import { Component, Input } from '@angular/core';
import { TaskService } from '../shared/button/services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {

  // public visible: boolean;
  public arr: Array<any> = [];

  constructor(public TaskService: TaskService) { }

  public add(): boolean {
    return this.TaskService.hideForm()
  }


}
