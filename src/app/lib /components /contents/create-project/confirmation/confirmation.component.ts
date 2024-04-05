import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { StateBaseService } from 'src/app/services /state.base.service';
import { getDatabase, ref, set, get, push, update } from "firebase/database";
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  dataOne:any[] = [];
  data!:any;
  paramId: any;

  constructor(private stateBaseService: StateBaseService<any>,
     private messageService: MessageService,
     private activtedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.stateBaseService.stateChanged.subscribe(val => this.data = val.customers);
  }

  confirm() {    
    this.activtedRoute.queryParamMap.pipe(
      tap(val => this.paramId = val.get('id'))
    ).subscribe()

    if(!this.paramId){
      const db = getDatabase();
      const postListRef = ref(db, 'users');
      const newPostRef = push(postListRef);
      set(newPostRef, this.data);
      this.messageService.add({ severity: 'success', detail: 'Project creation success', summary: 'success' });
    } else {
      const db = getDatabase();
      const reference = ref(db, `users/${this.paramId}`);
      update(reference, this.data);
      this.messageService.add({ severity: 'success', detail: 'Project Edit success', summary: 'success' });
    }
  }
}


