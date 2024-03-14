import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProjectsComponent } from '../contents/projects/projects.component';
import { CanActivateChild, canActivate } from 'src/app/services /authguard';
import { MenubarModule } from 'primeng/menubar';

const routes: Routes = [
 {path: '', component: HomeComponent, canActivateChild: [CanActivateChild], children: [
  {path: 'home/projects', component: ProjectsComponent}
 ]},
];

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    MenubarModule,

  ]
})
export class HomeModule { }
