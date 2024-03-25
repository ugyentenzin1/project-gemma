import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicDetails, Student } from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit, OnDestroy {

  @Output() btnNext: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder,
    private router: Router, 
    private stateBaseService: StateBaseService<any>) { }

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

  ngOnDestroy(): void {
    this.stateBaseService.add<BasicDetails>({basicDetails: this.basicDetails.value});
  }

  next() {
    this.btnNext.emit();
  }

}
