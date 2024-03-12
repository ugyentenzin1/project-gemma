import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services /auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  loginForm: boolean = true;

  signInForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  resetPassword: FormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email],
  })

  private authService: AuthService = inject(AuthService);

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private db : AngularFireDatabase
          ) { }

   users: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(val => {
     let logout = Boolean(val.get('logout'));
     logout ? (this.authService.logOut()):'';
    })
  }

  emailAndPassword(email: string, passowrd: string) { 
    this.authService.signInWithEmailAndPassword(email, passowrd)
  }

  signInWithGoogle(data: boolean){ 
    this.authService.googleSignIn(data);
  }

  forgotPassowrd() {
    this.loginForm = !this.loginForm;
  }

  sendResetEmail(email: string) {
    this.authService.sendResetEmailPassowrd(email);
  }
}
