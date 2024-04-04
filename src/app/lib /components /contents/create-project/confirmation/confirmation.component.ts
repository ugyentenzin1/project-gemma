import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { StateBaseService } from 'src/app/services /state.base.service';
import { getDatabase, ref, set, get, push } from "firebase/database";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  dataOne:any[] = [];

  data!:any;

  constructor(private stateBaseService: StateBaseService<any>, private messageService: MessageService) { }

  ngOnInit(): void {
    this.stateBaseService.stateChanged.subscribe(val => this.data = val.customers);
  }

  confirm() { 
    const db = getDatabase();
    const postListRef = ref(db, 'users');
    const newPostRef = push(postListRef);
    set(newPostRef, this.data);

    this.messageService.add({ severity: 'success', detail: 'Project creation success', summary: 'success' });
    
  }

  

}


