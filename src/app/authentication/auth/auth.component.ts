import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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

  private authService: AuthService = inject(AuthService);

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute
          ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(val => {
     let logout = Boolean(val.get('logout'));
     logout ? (this.authService.logOut()):'';
    })
  }

  signIn(data: any) {
   const user = this.authService.login(data);
    if(user === undefined) {
    alert('No user Found');

   } else {
    alert(`${data.username}, Welcome`);
    this.router.navigate(['/home']);
   }
  }
}
