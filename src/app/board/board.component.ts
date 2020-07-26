import { Component, Input } from '@angular/core';
import { TaskService } from '../shared/button/services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {

  constructor(public TaskService: TaskService) { }

  public add(): void {
    this.TaskService.hideForm();
    this.TaskService.checkForm(false);
  }


}
