import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project_gama';

  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container: HTMLElement | null = document.getElementById('container');


  ngOnInit(): void {
     
  }

  signIn() {
    this.container?.classList.remove("right-panel-active");
  }

  signUp() {
     this.container?.classList.remove("right-panel-active");
  } 
}
