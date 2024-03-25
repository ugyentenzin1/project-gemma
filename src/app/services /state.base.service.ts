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

  data: any; // This will hold your transformed data
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    super({ trackStateHistory: true, logStateChanges: true });
      
   this.db.list('/').valueChanges().subscribe(val => {
      try {
        console.log(val)
        this.setState({data: val}, "INITIAL_STATE")
      } catch (error) {
        console.log(error, 'error')
      }
    })

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
