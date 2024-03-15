import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demographic-details',
  templateUrl: './demographic-details.component.html',
  styleUrls: ['./demographic-details.component.scss']
})
export class DemographicDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
