import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Projects, StoreState } from '../interfaces/interfaceStore';
import { ProjectsEnums } from '../enums /projects';

@Injectable({
  providedIn: 'root'
})
export class StateBaseService<T> extends ObservableStore<any> {

  constructor(private http: HttpClient) {
    super({ trackStateHistory: true, logStateChanges: true });
  }

  apiUrl = 'https://randomuser.me/api/';

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl).pipe(
      map(val => {
        this.setState({ users: val }, ProjectsEnums.PROJECTS);
        return val
      })
    )
  }
}
