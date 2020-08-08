import { Injectable, NgZone } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userInfo: any;
  private auth = firebase.auth();
  
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user =>{
      if (user) {
        this.userInfo = JSON.parse(JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(this.userInfo));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  public githubLogin(): void {
    const provider = new firebase.auth.GithubAuthProvider();
    this.afAuth
      .signInWithPopup(provider)
      .then((data) => {
        console.log(this.auth);
        this.ngZone.run(() => this.router.navigate(["board"])).then();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public githubLogOut(): void {
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate["login"];
    });
  }

  public loggedIn(): boolean {
    return localStorage.getItem('user') != null ? true : false;
  }
}
