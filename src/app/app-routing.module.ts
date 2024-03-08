import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './services /authguard.service';
import { canActivate } from './services /authguard';
import { CreateAccountComponent } from './authentication/create-account/create-account.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '' , redirectTo: 'auth', pathMatch: 'full'},
  {path: 'new-account', component: CreateAccountComponent},
  {path: 'home', component: HomeComponent, canActivate: [canActivate]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
