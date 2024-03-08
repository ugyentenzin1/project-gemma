import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models /user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  

  constructor(private userService: UserService) { }

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
    return this.isLogged;
  }

  newAccount = (name: string, id: string, passowrd: string) => {
    this.userService.users.unshift(new User(name, id, passowrd));
    const updatedUsers = this.userService.users;
    console.log(updatedUsers)
  }
}
