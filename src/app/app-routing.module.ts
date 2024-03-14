import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lib /components /home/home.component';
import { CanActivateChild, canActivate } from './services /authguard';

const routes: Routes = [
  {path: '' , redirectTo: 'auth', pathMatch: 'full'},
  {path: 'home', loadChildren:():any => import('../app/lib /components /home/home.module').then(val => val.HomeModule) , canActivate: [canActivate], canActivateChild: [CanActivateChild]},
  {path: '', loadChildren: (): any => import('../app/authentication/authentication.module').then(val => val.AuthenticationModule)},
  {path: 'home/projects/add-student', loadChildren:():any => import('./lib /components /contents/create-project/create-project.module').then(val => val.CreateProjectModule)}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
