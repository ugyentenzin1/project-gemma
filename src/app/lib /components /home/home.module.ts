import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { SideDetailsComponent } from '../contents/side-details/side-details.component';


@NgModule({
  declarations: [
    SideDetailsComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    TableModule,
    TimelineModule,
    ButtonModule,
  ]
})
export class HomeModule { }
