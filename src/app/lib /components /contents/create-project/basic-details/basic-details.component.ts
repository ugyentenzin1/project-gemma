import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasicDetails} from 'src/app/interfaces/interfaceStore';
import { StateBaseService } from 'src/app/services /state.base.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit, OnDestroy {

  @Output() btnNext: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder,
    private stateBaseService: StateBaseService<any>,
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase) { }

    dataDumb: any;
    route!: string;
    patchValue: any;
    paramsId!: any;

  basicDetails: FormGroup = this.fb.group({
    name: ['', Validators.required],
    dateOfBirth: [ Date, Validators.required],
    studentId: ['', Validators.required],
    citizenId: ['', Validators.required],
    dzongkhag: ['', Validators.required],
    gewog: ['', Validators.required],
    village: ['', Validators.required],
  })

  ngOnInit(): void {
  this.activatedRoute.queryParamMap.pipe(
    tap(val => this.paramsId = val.get('id')),
    switchMap(val => this.db.list(`/users/${val.get('id')}`).valueChanges()),
    tap(val => {
      this.patchValue = val[0];
      this.basicDetails.patchValue(this.patchValue)
    })
  ).subscribe()
  }

  ngOnDestroy(): void {
    this.stateBaseService.add<BasicDetails>({basicDetails: this.basicDetails.value});
  }

  next() {
    this.btnNext.emit();
  }

}
