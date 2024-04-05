import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { DemographicDetails } from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-demographic-details',
  templateUrl: './demographic-details.component.html',
  styleUrls: ['./demographic-details.component.scss']
})
export class DemographicDetailsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
     private stateBaseService: StateBaseService<any>,
     private db: AngularFireDatabase) { }

     patchValue: any;

     paraMapId: any;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(
      tap(val => this.paraMapId = val.get('id')),
      switchMap(val => this.db.list(`/users/${val.get('id')}`).valueChanges()),
      tap(val => {
        this.patchValue = val[1];
        this.dempGraphicDetails.patchValue(this.patchValue)
      })
    ).subscribe()

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
