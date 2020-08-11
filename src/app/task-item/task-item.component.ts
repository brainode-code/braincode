import { TaskForm } from './../form/form.model';
import { TaskService } from '../shared/services/task.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskForm;
  public tasks: TaskForm[];


  constructor(public TaskService: TaskService) { }

  ngOnInit(): void {
  }

  public openEditForm(): void {
    this.TaskService.getEditTask(this.task);
    this.TaskService.hideForm();
    this.TaskService.checkForm(true);
  }

  

}

