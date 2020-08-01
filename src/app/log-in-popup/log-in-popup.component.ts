import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth-service/auth.service';

@Component({
  selector: 'app-log-in-popup',
  templateUrl: './log-in-popup.component.html',
  styleUrls: ['./log-in-popup.component.scss']
})
export class LogInPopupComponent implements OnInit {

  public title = 'Log in with GitHub';

  constructor(
    private autService: AuthService
  ) { }

  ngOnInit(): void {
  }

  githubLogin() {
   this.autService.githubLogin();
  }
}
