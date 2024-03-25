import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
import { ProjectsEnums } from '../enums /projects';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';



export interface Customer<T> {
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export class StateBaseService<T> extends ObservableStore<any>  {

  data: any; 

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    super({ trackStateHistory: true, logStateChanges: true });     
    this.initialState();
  }

  initialState() {
    const state: any = {
      data: undefined
    }

    this.setState(state, 'initial_state');
  }

  updateState(val: any, label: string) {
    this.setState(val , label);
  }

  getStateU(state: string){
    this.getState()[state];
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
