import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemographicDetails } from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-demographic-details',
  templateUrl: './demographic-details.component.html',
  styleUrls: ['./demographic-details.component.scss']
})
export class DemographicDetailsComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private stateBaseService: StateBaseService<any>) { }

  ngOnInit(): void {
    this.dempGraphicDetails.patchValue(this.dempGraphicDetails.value)
  }

  ngOnDestroy(): void {
    this.stateBaseService.add<DemographicDetails>({demoGraphicDetails:this.dempGraphicDetails?.value});  
  }


  dempGraphicDetails: FormGroup = this.fb.group({
    schoolName: ['', Validators.required],
    grade: ['', Validators.required],
    house: ['', Validators.required],
    subject: [''],
    noOfSubjectTakenByStudents: ['', Validators.required],
    previousSchool: ['', Validators.required]
  })

}
