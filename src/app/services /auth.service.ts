import { Injectable } from '@angular/core';
import {GoogleAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor(
    private fireAuth: AngularFireAuth, 
    private router: Router) { }

  logOut(){
    this.isLogged = false;
    this.fireAuth.signOut();
    localStorage.removeItem('emailAndPassword');
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

  googleSignIn(data: boolean) {
    this.fireAuth.signInWithPopup(data ? new GoogleAuthProvider : new FacebookAuthProvider).then((res) => {
      this.isLogged = true;
      this.router.navigate(['/home']);
      localStorage.setItem('googleToken', JSON.stringify(res.user?.uid));
    }, error => alert(error.message)) ;
  }

  signInWithEmailAndPassword(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLogged = true;
      this.router.navigate(['/home']);
      localStorage.setItem('emailAndPassword', JSON.stringify(res.user?.uid))
    }, err => alert(err));
  }

  createUserUsingEmail(email: string, passowrd: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, passowrd).then((res) => {
      alert('account successfully created')
      this.router.navigate(['/auth']);
    }, err => alert(err.message))
  }

  sendResetEmailPassowrd(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      alert('Check Your Email!!!');
      this.router.navigate(['/auth']);
    }, err => alert(err.message));
  }
}
