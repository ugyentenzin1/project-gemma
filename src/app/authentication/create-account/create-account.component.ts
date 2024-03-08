import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models /user';
import { AuthService } from 'src/app/services /auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createNewAccountForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  creatNewAccountFn(name: string, id: string, password: string) {
    this.authService.newAccount(name, id, password);
    this.router.navigate(['/auth'])
  } 

}
