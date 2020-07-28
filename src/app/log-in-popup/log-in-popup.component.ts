import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-log-in-popup',
  templateUrl: './log-in-popup.component.html',
  styleUrls: ['./log-in-popup.component.scss']
})
export class LogInPopupComponent implements OnInit {

  public title = 'Log in with GitHub';

  constructor(
    private afAuth: AngularFireAuth,
    private autService: AuthService
  ) { }

  ngOnInit(): void {
  }


  githubLogin() {
   this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());

  }
  githubLogOut(): void {
    this.afAuth.signOut();
    }
}
