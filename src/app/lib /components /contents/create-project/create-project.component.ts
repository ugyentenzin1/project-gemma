import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private messageService: MessageService,
    private router: Router) { }

  activeIndex: number = 0;

  ngOnInit(): void {
    this.messageService.add({severity: 'success', detail:' dadfa', summary: 'sersadf'});
  }

  items: MenuItem[] = [
    {
      index: 0,
      label: 'Basic Details',
      command: (event: any) => this.messageService.add({severity:'success', summary:'Suceess', detail: event.item.label}),
      routerLink: 'basic-details',
      icon: 'pi pi-check',
      done : false
    },
    {
      index: 1,
      label: 'Demographic Details',
      routerLink: 'demographic-details',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({severity:'success', summary:'Suceess', detail: event.item.label}),
      done: false

    },
    
    {
      index: 2,
      label: 'Parent Address',
      routerLink: 'parents-details',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({severity:'success', summary:'Suceess', detail: event.item.label}),
      done: false
    },
    {
      index: 3,
      label: 'Confirmation',
      routerLink: 'confirmation',
      icon: 'pi pi-check',
      command: (event: any) => this.messageService.add({severity:'success', summary:'Suceess', detail: event.item.label}),
      done: false
    },
  ]

  routes:any[] = [this.items.forEach(val => val.routerLink)];

  stepChange(index: number) {

    console.log(index, 'index')

    if(index === 0) return 
    if(index < 3) {
        this.items[index - 1]['done'] = true;
    } else { 
      this.items[index - 1]['done'] = true;
      this.items[index]['done'] = true;
    } 

    this.items.forEach(val => {
      if (val['done'] === true) {
        document.getElementsByClassName('p-steps-number')[val['index']].innerHTML = "fini";
      } 
    });
    this.router.navigate(['/home/add-student/'+this.items[index].routerLink])
  }
}
