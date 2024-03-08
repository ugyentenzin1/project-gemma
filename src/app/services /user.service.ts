import { Injectable } from '@angular/core';
import { User } from '../models /user';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor() { }

  users: User[] = [
    new User('Ruby', '090909', 'ruby01'),
    new User('Khufra', '0489283', 'khufra02'),
    new User('Tigreal', '0683483', 'tigreal03'),
    new User('Franco', '01111183', 'franco04'),
    new User('Uranus', '043423233', 'uranus05'),
    new User('Gatok', '00000673', 'gatok06'),
  ]


}
