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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  next(event: number) {
     this.activeIndexChange.emit(event);
  }
}
