import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-strepper',
  templateUrl: './strepper.component.html',
  styleUrls: ['./strepper.component.scss']
})
export class StrepperComponent implements OnInit {

  @Input() data!: any[];
  @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();
  @Output() continue: EventEmitter<any> = new EventEmitter();
  @Output() goBack: EventEmitter<any> = new EventEmitter();
  

  activeIndex: number = 0;

  constructor(
    private router: Router,
    private baseStateService: StateBaseService<any>
  ) { }

  ngOnInit(): void {
  }

  next(event: number) {
    this.activeIndex = event;
    event < 3 && this.activeIndexChange.emit(event);
  }

  cancel(event: number) {
    console.log(event, 'cancel')
    event = this.activeIndex;
    event < 3 && this.goBack.emit(event = event - 1);
  }

  continueStepper(value? : any): void {
    this.activeIndex < 3 && (this.activeIndexChange.emit(this.activeIndex = this.activeIndex + 1));
    this.baseStateService.add(value);
    this.continue.emit();
  }
}
