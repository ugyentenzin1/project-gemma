import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parents-address-details',
  templateUrl: './parents-address-details.component.html',
  styleUrls: ['./parents-address-details.component.scss']
})
export class ParentsAddressDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
}
