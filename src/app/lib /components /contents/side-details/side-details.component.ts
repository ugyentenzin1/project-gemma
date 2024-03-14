import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-side-details',
  templateUrl: './side-details.component.html',
  styleUrls: ['./side-details.component.scss']
})
export class SideDetailsComponent implements OnInit {

  userDetails: any;

  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.fireAuth.user.pipe(
      tap(val => this.userDetails = val)
    ).subscribe(val => console.log(val))
  } 

}
