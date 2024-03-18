import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
  }

  next(event: number) {
    this.activeIndex = event;
    event < 3 && this.activeIndexChange.emit(event);
  }

  cancel() {
    this.goBack.emit();
  }

  continueStepper(): void {
    this.activeIndex < 3 && (this.activeIndexChange.emit(this.activeIndex = this.activeIndex + 1));
  }
}
