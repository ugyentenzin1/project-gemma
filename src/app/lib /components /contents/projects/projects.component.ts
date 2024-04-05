import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Route, Router } from '@angular/router';
import { map, tap, } from 'rxjs';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  products!: any;

  cols: any[] = ['Std Id', 'Name', 'Citizen Id', 'Dzongkhag',
'Gewong', 'Village', 'School Name', 'No Of Subject', 'Stream', 'Previous School',
'Grade', 'House', 'Parents Name', 'Parents CitizenId', 'Parent Cont. no', 
'Martial Status', 'Parent Dzongkhag', 'Parents Gewog', 'Product Village', 'Actions'];

  constructor(private stateSevice: StateBaseService<any>, 
    private db: AngularFireDatabase, 
    private router: Router) { }

  ngOnInit(): void {
    this.db.list('/users').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
      ),
      tap(val => this.products = val),
    ).subscribe();
  }
}
