import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services /auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createNewAccountForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, 
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  createEmailAndPassword(email: string, passowrd: string) {
    this.authService.createUserUsingEmail(email, passowrd);
  }
}
