import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    console.log(this)
    this.messageService.add({severity: 'success', detail:' dadfa', summary: 'sersadf'})
  }

  items: MenuItem[] = [
    {
      label: 'Basic Details',
      routerLink: 'basic-details'
    },
    {
      label: 'Demographic Details',
      routerLink: 'demographic-details'
    },
    
    {
      label: 'Parent Address',
      routerLink: 'parents-details'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    },
    

  ]

}
