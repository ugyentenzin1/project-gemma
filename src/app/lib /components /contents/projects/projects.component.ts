import { Component, OnInit } from '@angular/core';
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

  constructor(private stateSevice: StateBaseService<any>) { }

  ngOnInit(): void {
  }

}
