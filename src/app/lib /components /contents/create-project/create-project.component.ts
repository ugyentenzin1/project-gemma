import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Customer, StateBaseService } from 'src/app/services /state.base.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {baseURL} from ''

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  storeSub!: Subscription;
  customers!: Customer<any>[];


  constructor(private messageService: MessageService,
    private router: Router,
    private baseStateService: StateBaseService<any>,
    private http: HttpClient,
    private db: AngularFireDatabase) {
  }


  ngOnInit(): void {
    this.messageService.add({ severity: 'success', detail: ' dadfa', summary: 'sersadf' });

    //Observable Store
    this.storeSub = this.baseStateService.stateChanged.subscribe(state => {
      if (state) {
        this.customers = state.customers;
      }
    }); 
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  get():Observable<any> {
    return this.http.get()
  }

  items: MenuItem[] = [
    {
      index: 0,
      label: 'Basic Details',
      command: (event: any) => this.messageService.add({ severity: 'success', summary: 'Suceess', detail: event.item.label }),
      routerLink: 'basic-details',
      icon: 'pi pi-check',
      done: false
    },
    {
      index: 1,
      label: 'Demographic Details',
      routerLink: 'demographic-details',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({ severity: 'success', summary: 'Suceess', detail: event.item.label }),
      done: false

    },

    {
      index: 2,
      label: 'Parent Address',
      routerLink: 'parents-details',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({ severity: 'success', summary: 'Suceess', detail: event.item.label }),
      done: false
    },
    {
      index: 3,
      label: 'Confirmation',
      routerLink: 'confirmation',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({ severity: 'success', summary: 'Suceess', detail: event.item.label }),
      done: false
    },
  ]

  stepChange(index: number) {
    console.log(index)
    if (index === 0 || index === undefined) return
    if (index < 3) {
      this.items[index - 1]['done'] = true;
    } else {
      this.items[index - 1]['done'] = true
    }

    this.items.forEach(val => {
      if (val['done'] === true) {
        document.getElementsByClassName('p-steps-number')[val['index']].innerHTML = '<i class="pi pi-check"></i>';
      }
    });
    this.router.navigate(['/home/add-student/' + this.items[index].routerLink])
  }

  cancel(index: number) {
    if (index > 0 && index < this.items.length) {
      alert('Navigating to previous state!!');
      this.router.navigate(['/home/add-student/' + this.items[index - 1].routerLink]);
    } else {
      alert('Cannot navigate to previous state. Index out of range.');
    }
  }
}
