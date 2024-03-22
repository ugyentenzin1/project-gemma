import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BASE_URL } from 'env';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project_gama';

  data: any;

  constructor(private http: HttpClient, private db: AngularFireDatabase){}

  ngOnInit(): void {
    this.db.list('/').valueChanges().subscribe(val => console.log(val, 'tete'))
  }

}
