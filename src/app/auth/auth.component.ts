import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { AuthService } from '../services /auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private authService: AuthService
          ) { }

  ngOnInit(): void {

  }

  signIn(data: any) {
   console.log(data)
   const user = this.authService.login(data);
   this.authService.isAuthenticated() ? console.log('sucess'): console.log('no user');
   user === undefined ? alert('No user Found'): alert(`${data.username}, Welcome`);    
  }

}
