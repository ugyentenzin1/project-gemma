import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule} from 'primeng/toast';
import { BasicDetailsComponent } from './basic-details/basic-details.component'
import { DemographicDetailsComponent } from './demographic-details/demographic-details.component';
import { ParentsAddressDetailsComponent } from './parents-address-details/parents-address-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CreateProjectComponent,
    BasicDetailsComponent,
    ConfirmationComponent,
    DemographicDetailsComponent,
    ParentsAddressDetailsComponent
  ],
  imports: [
    CommonModule,
    StepsModule,
    ToastModule,
    ButtonModule
  ],
  providers:[]
})
export class CreateProjectModule { }
