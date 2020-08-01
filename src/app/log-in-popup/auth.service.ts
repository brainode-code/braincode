import { Injectable, NgZone } from "@angular/core";
import { auth } from "firebase";
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // githubLogin(): void {
  //   this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  //  }
 
  //  githubLogOut(): void {
  //    this.afAuth.signOut();
  //    }

}
