import { Component, OnInit } from '@angular/core';
import { StateBaseService } from 'src/app/services /state.base.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  data!:any;

  constructor(private stateBaseService: StateBaseService<any>) { }

  ngOnInit(): void {
    this.stateBaseService.stateChanged.subscribe(val => this.data = val.customers);
  }

}
