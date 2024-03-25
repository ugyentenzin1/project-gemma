import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, tap } from 'rxjs';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  products: any[] = [
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    },
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    },
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    },
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    },
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    },
    {
      code: 23433,
      name: 'Generator',
      category: 'Hardware',
      quantity: 2
    }
  ];

  cols: any[] = [
    {feild: 'code', header: 'Code'},
    {feild: 'name', header: 'Name'},
    {feild: 'category', header: 'Category'},
    {feild: 'quatity', header: 'Quantity'},
    {feild: 'action', header: 'Action'}
  ];

  

  constructor(private stateSevice: StateBaseService<any>, 
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.db.list('/').valueChanges().subscribe(val => this.stateSevice.updateState(val,'update_state'));

    this.stateSevice.getStateU('update_state');
  }

}
