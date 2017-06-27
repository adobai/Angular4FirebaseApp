import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  token: string;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

  }

  getToken() {
    this.afAuth.auth.currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['logged-in']);
          this.afAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      );
  }

  logout(){
    this.afAuth.auth.signOut();
    this.token = null;
  }

  createUser(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['logged-in']);
        this.afAuth.auth.currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          )
      }
    );
  }
}
