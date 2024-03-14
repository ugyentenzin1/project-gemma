import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProjectsComponent } from '../contents/projects/projects.component';
import { CanActivateChild, canActivate } from 'src/app/services /authguard';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [canActivate], canActivateChild: [CanActivateChild], children: [
      {
        path: 'home/projects', component: ProjectsComponent, children: [
          { path: 'add-student', loadChildren: (): any => import('../contents/create-project/create-project.module').then(val => val.CreateProjectModule) }
        ]
      },
      { path: '', redirectTo: 'home/projects', pathMatch: 'full' },
    ]
  },
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
    TableModule,
    TimelineModule,
    ButtonModule,
  ]
})
export class HomeModule { }
