import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor(private userService: UserService) { }

  //check the creditial
  login(users: any) {
    this.userService.users.map(val => console.log(val.name, val.userName))
    let user = this.userService.users.find(val => val.userName === users.username && val.userPassword === users.password);
    user === undefined ? this.isLogged = false : this.isLogged = true;
    return user;

  }

  logOut(){
    this.isLogged = false;
  }

  isAuthenticated(): Boolean {
    return this.isLogged;
  }
}
