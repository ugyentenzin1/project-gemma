import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
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
      customers: {},
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

  add<T>(customer: any) {
    let state = this.getState();
    this.setState({customers: ({...state.customers, ...customer})}, ProjectsEnums.CUSTOMER);
  }


  remove() {
    let state = this.getState();
    state.customers.splice(state.customers.length - 1, 1);
    this.setState({ remove_customers: state.customers }, ProjectsEnums.REMOVE_CUSTOMER);
  }

}
