import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  token: string;
  user: Observable<firebase.User>;

  requestTitle: string;
  requestMessage: string;
  errMsg: boolean;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    
  }

  getAuthTitle(){
    return this.requestTitle;
  }

  getAuthMessage(){
    return this.requestMessage;
  }

  getErrMsg(){
    return this.errMsg;
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
          if (this.afAuth.auth.currentUser.emailVerified) {
            this.router.navigate(['logged-in']);
            this.afAuth.auth.currentUser.getIdToken()
              .then(
                (token: string) => this.token = token
              )
              .catch (
                err => {
                  this.requestTitle = 'Error';
                  this.requestMessage = err.message;
                  this.errMsg = true;
                  this.router.navigate(['auth-message']);
                }
              )
          } else {
            this.afAuth.auth.currentUser.sendEmailVerification()
              .then(
                response => {
                  this.requestTitle = 'You must verify your email';
                  this.requestMessage = 'Please check your email for further instructions.';
                  this.errMsg = true;
                  this.router.navigate(['auth-message']);
                }
              )
              .catch(
                err => {
                  this.requestTitle = 'Error';
                  this.requestMessage = err.message;
                  this.errMsg = true;
                  this.router.navigate(['auth-message']);
                }
              );
            }
        }
      )
      .catch (
        err => {
          this.requestTitle = 'Error';
          this.requestMessage = err.message;
          this.errMsg = true;
          this.router.navigate(['auth-message']);
        }
      );
  }

  logout(){
    this.afAuth.auth.signOut();
    this.token = null;
  }

  createUser(email: string, password: string, dname: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        this.afAuth.auth.currentUser.updateProfile({displayName: dname, photoURL: null})
        .then(
          response => {
            this.afAuth.auth.currentUser.sendEmailVerification()
            .then(
              response => {
                this.requestTitle = 'Registration Request Received';
                this.requestMessage ='Please check your email for further instructions.';
                this.errMsg = null;
                this.router.navigate(['auth-message']);
              }
            )
            .catch(
              err => {
                this.requestTitle = 'Error';
                this.requestMessage = err.message;
                this.errMsg = true;
                this.router.navigate(['auth-message']);
            });
          }
        )
        .catch(
          err => {
            this.requestTitle = 'Error';
            this.requestMessage = err.message;
            this.errMsg = true;
            this.router.navigate(['auth-message']);
          }
        );
      }
    )
    .catch(
      err => {
        this.requestTitle = 'Error';
        this.requestMessage = err.message;
        this.errMsg = true;
        this.router.navigate(['auth-message']);
      }
    );
  }

  forgotPassword(email: string){
    
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then(
        response => {
          this.requestTitle ='Email Message Sent';
          this.requestMessage = 'Please check your email for further instructions.';
          this.errMsg = null;
          this.router.navigate(['auth-message']);
        }
      )
      .catch(
        err => {
          this.requestTitle = 'Error';
          this.requestMessage = err.message;
          this.errMsg = true;
          this.router.navigate(['auth-message']);
        }  
      );
  }
}
