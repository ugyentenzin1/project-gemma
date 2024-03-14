import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-file',
      },
      {
          label: 'Profile',
          icon: 'pi pi-fw pi-pencil',
      },
      {
          label: 'Projects',
          icon: 'pi pi-fw pi-user',
          routerLink: '/home/projects',
          
      },
      {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
      },
    ];
  }

}
