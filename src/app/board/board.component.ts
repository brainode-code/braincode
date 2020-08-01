import { Component, Input } from '@angular/core';
import { TaskService } from '../shared/services/task.service';
import { AuthService } from '../log-in-popup/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {

  constructor(public TaskService: TaskService,
    private authService: AuthService) { }

  public add(): void {
    this.TaskService.hideForm();
    this.TaskService.checkForm(false);
  }

  public OnSignOut(): void {
    this.authService.githubLogOut();
  }
}
