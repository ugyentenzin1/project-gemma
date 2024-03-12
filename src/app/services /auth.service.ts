import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models /user';
import {GoogleAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  

  constructor(private userService: UserService,
    private fireAuth: AngularFireAuth, 
    private router: Router) { }

  logOut(){
    this.isLogged = false;
    this.fireAuth.signOut();
    localStorage.removeItem('emailAndPassword');
  }

  isAuthenticated(): Boolean {
    return this.isLogged;
  }

  newAccount = (name: string, id: string, passowrd: string) => {
    this.userService.users.unshift(new User(name, id, passowrd));
    const updatedUsers = this.userService.users;
    console.log(updatedUsers)
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
}
