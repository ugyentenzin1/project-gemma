import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { DemographicDetails } from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-parents-address-details',
  templateUrl: './parents-address-details.component.html',
  styleUrls: ['./parents-address-details.component.scss']
})
export class ParentsAddressDetailsComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
    private router: Router,
     private stateBaseService: StateBaseService<any>,
     private activatedRoute: ActivatedRoute) { }

     patchValue: any;
     paramId: any;

     db = inject(AngularFireDatabase)

  parentsDetails: FormGroup = this.fb.group({
    name: ['', Validators.required],
    martialStatus: ['', Validators.required],
    citizenId: [''],
    contactNumber: ['', Validators.required],
    dzongkhag: ['', Validators.required],
    gewog: ['', Validators.required],
    village: ['', Validators.required],
  })

  status: any[] = [{name: 'Married'}, {name: 'Single'}, {name: 'Divorce'}];
  
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(
      tap(val => this.paramId = val.get('id')),
      switchMap(val => this.db.list(`/users/${val.get('id')}`).valueChanges()),
      tap(val => {
        this.patchValue = val[2];
        this.parentsDetails.patchValue(this.patchValue)
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.stateBaseService.add<DemographicDetails>({parentsDetails:this.parentsDetails?.value});  
  }
}
