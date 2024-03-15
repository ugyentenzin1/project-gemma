import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  basicDetails: FormGroup = this.fb.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    studentId: ['', Validators.required],
    citizenId: [''],
    dzongkhag: ['', Validators.required],
    gewog: ['', Validators.required],
    village: ['', Validators.required],
  })

  ngOnInit(): void {
  }
}
