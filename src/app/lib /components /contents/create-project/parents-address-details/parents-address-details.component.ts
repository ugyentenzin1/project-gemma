import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemographicDetails } from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-parents-address-details',
  templateUrl: './parents-address-details.component.html',
  styleUrls: ['./parents-address-details.component.scss']
})
export class ParentsAddressDetailsComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private stateBaseService: StateBaseService<any>) { }

  parentsDetails: FormGroup = this.fb.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    martialStatus: ['', Validators.required],
    citizenId: [''],
    contactNumber: ['', Validators.required],
    dzongkhag: ['', Validators.required],
    gewog: ['', Validators.required],
    village: ['', Validators.required],
  })
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stateBaseService.add<DemographicDetails>({parentsDetails:this.parentsDetails?.value});  
  }
}
