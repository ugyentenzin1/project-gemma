import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { canActivate } from './services /authguard';

const routes: Routes = [
  {path: '' , redirectTo: 'auth', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [canActivate]},
  {path: '', loadChildren: (): any => import('../app/authentication/authentication.module').then(val => val.AuthenticationModule)},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
