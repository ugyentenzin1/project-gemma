import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Projects } from '../interfaces/interfaceStore';
import { ProjectsEnums } from '../enums /projects';



export interface Customer<T> {
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export class StateBaseService<T> extends ObservableStore<any>  {

  constructor(private http: HttpClient) {
    super({ trackStateHistory: true, logStateChanges: true });

    const initialState = {
      customers: [
        {name: 'sona', phoneNo: 17443788, age: 24, occupation: 'Software Engineer'},
        {name: 'sona', phoneNo: 17443788, age: 24, occupation: 'Software Engineer'},
        {name: 'sona', phoneNo: 17443788, age: 24, occupation: 'Software Engineer'},
        {name: 'sona', phoneNo: 17443788, age: 24, occupation: 'Software Engineer'},
        {name: 'sona', phoneNo: 17443788, age: 24, occupation: 'Software Engineer'}
      ],
      customer: null
    }
    this.setState(initialState, 'INIT_STATE');


    console.log(this.stateHistory, 'History', this.getState())
  }

  apiUrl = 'https://randomuser.me/api/';

  getSpecificState<U>(state?: string): U | object {
    const currentState = this.getState();
    if (state) {
      return currentState[state];
    }
    return currentState;
  }

  add(customer: any) {
    let state = this.getState();
    state.customers.push(customer);
    this.setState({ customers: state.customers }, ProjectsEnums.CUSTOMER);
  }


  remove() {
    let state = this.getState();
    state.customers.splice(state.customers.length - 1, 1);
    this.setState({ remove_customers: state.customers }, ProjectsEnums.REMOVE_CUSTOMER);
  }

}
