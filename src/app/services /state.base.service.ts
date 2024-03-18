import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { StoreState } from '../interfaces/interfaceStore';

@Injectable({
  providedIn: 'root'
})
export class StateBaseService<T> extends ObservableStore<any> {

  constructor(private http: HttpClient) {
    super({trackStateHistory: true, logStateChanges: true});
  }

  specificStateChange<U>(stateKey: string, allowFilter: boolean = true): Observable<U> {
		return this.stateWithPropertyChanges.pipe(
			filter(stateChange => !allowFilter || (allowFilter && !!stateChange.stateChanges[stateKey])),
			map(stateChange => stateChange.stateChanges[stateKey]));
	}

	specificGlobalStateChange<U>(stateKey: string): Observable<U> {
		return this.globalStateWithPropertyChanges.pipe(
			filter(stateChange => !!stateChange?.stateChanges?.[stateKey]),
			map(stateChange => stateChange?.stateChanges?.[stateKey]));
	}

	updateSpecificState<U>(data: U, stateKey: string): T {
		return this.setState({[stateKey]: data} as unknown as Partial<T>, 'UPDATE_' + stateKey.toUpperCase());
	}

	updateCombinedStates<U>(data: U): T {
		return this.setState(data as unknown as Partial<T>, 'UPDATE_COMBINED_STATES');
	}

	getSpecificState = <U>(state?: string): U => state ? this.getState()[state] : this.getState();
}
