import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lib /components /home/home.component';
import { ProjectsComponent } from './lib /components /contents/projects/projects.component';
import { CreateProjectComponent } from './lib /components /contents/create-project/create-project.component';
import { BasicDetailsComponent } from './lib /components /contents/create-project/basic-details/basic-details.component';
import { DemographicDetailsComponent } from './lib /components /contents/create-project/demographic-details/demographic-details.component';
import { ConfirmationComponent } from './lib /components /contents/create-project/confirmation/confirmation.component';
import { ParentsAddressDetailsComponent } from './lib /components /contents/create-project/parents-address-details/parents-address-details.component';
import { CanActivateChild, canActivate } from './services /authguard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: (): any => import('../app/authentication/authentication.module').then(val => val.AuthenticationModule) },
  {
    path: 'home', canActivate:[canActivate], canActivateChild: [CanActivateChild], component: HomeComponent, 
      children: [
        { path: 'projects', component: ProjectsComponent }, 
        { path: '', redirectTo: 'projects', pathMatch: 'full' },
        { path:'',
          loadChildren: ()=> import('./lib /components /home/home.module').then(m => m.HomeModule)
        },
        { path: 'add-student', component: CreateProjectComponent, 
                children: [
                  { path: '', loadChildren: (): any => import('../app/lib /components /contents/create-project/create-project.module').then(val => val.CreateProjectModule) },
                  { path: 'basic-details', component: BasicDetailsComponent},
                  { path: '', redirectTo: 'basic-details', pathMatch: 'full'},
                  { path: 'demographic-details', component: DemographicDetailsComponent },
                  { path: 'parents-details', component: ParentsAddressDetailsComponent },
                  { path: 'confirmation', component: ConfirmationComponent }
            ]
          },
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
