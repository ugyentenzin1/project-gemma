import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('this')
  }

  route(): void{
    this.router.navigate(['/home/add-student'])
  }

}
