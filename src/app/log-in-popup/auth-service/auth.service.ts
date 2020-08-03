import { Injectable, NgZone } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {}

  auth = firebase.auth();


  githubLogin(): void {
    const provider = new firebase.auth.GithubAuthProvider();
    this.afAuth
      .signInWithPopup(provider)
      .then((data) => {
        console.log(data);
        this.ngZone.run(() => this.router.navigate(["board"])).then();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  githubLogOut(): void {
    this.auth.signOut().then(() => {
      this.router.navigate["login"];
    });
  }
}
