import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },

  {
    path: 'new-account',
    component: CreateAccountComponent
  }
];

@NgModule({
  declarations: [
    
    AuthComponent,
    CreateAccountComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
