import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { StepsModule } from 'primeng/steps';
import { Route, RouterModule, Routes } from '@angular/router';
import { ToastModule} from 'primeng/toast';
import { BasicDetailsComponent } from './basic-details/basic-details.component'
import { MessageService } from 'primeng/api';
import { DemographicDetailsComponent } from './demographic-details/demographic-details.component';
import { ParentsAddressDetailsComponent } from './parents-address-details/parents-address-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CanActivateChild, canActivate } from 'src/app/services /authguard';

const routes: Routes = [
  {path: '', canActivate:[canActivate], canActivateChild: [CanActivateChild], component: CreateProjectComponent, children:[
    {path: 'basic-details', component: BasicDetailsComponent},
    {path: '', redirectTo: 'basic-details', pathMatch: 'full'},
    {path: 'demographic-details', component: DemographicDetailsComponent},
    {path: 'parents-details', component: ParentsAddressDetailsComponent},
    {path: 'confirmation', component: ConfirmationComponent}
  ]}
]

@NgModule({
  declarations: [
    CreateProjectComponent,
    BasicDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StepsModule,
    ToastModule
  ],
  providers:[MessageService]
})
export class CreateProjectModule { }
