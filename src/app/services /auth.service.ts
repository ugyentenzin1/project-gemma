import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models /user';
import {GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  

  constructor(private userService: UserService,
    private fireAuth: AngularFireAuth, 
    private router: Router) { }

  //check the creditial
  login(users: any) {
    this.userService.users.map((val: any) => console.log(val.name, val.userName))
    let user = this.userService.users.find(val => val.userName === users.username && val.userPassword === users.password);
    user === undefined ? this.isLogged = false : this.isLogged = true;
    return user;
  }

  logOut(){
    this.isLogged ? alert('You are logged out'): '' ;
  }

  isAuthenticated(): Boolean {
    console.log(this.isLogged, 'check')
    return this.isLogged;
  }

  newAccount = (name: string, id: string, passowrd: string) => {
    this.userService.users.unshift(new User(name, id, passowrd));
    const updatedUsers = this.userService.users;
    console.log(updatedUsers)
  }

  googleSignIn() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      this.isLogged = true;
      this.router.navigate(['/home']);
      localStorage.setItem('googleToken', JSON.stringify(res));
    }, error => alert(error.message));
  }
}
