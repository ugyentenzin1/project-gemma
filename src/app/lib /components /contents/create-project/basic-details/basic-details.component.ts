import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {

  @Output() btnNext: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder,
    private router: Router) { }

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

  next() {
    this.btnNext.emit();
  }

}
