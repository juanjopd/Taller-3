import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'Login';

  @Input() user: string = ""
  @Input() password: string = ""
  disLogin: boolean = true;
  disCarrusel: boolean = false; 

  validarLogin(){
    if (this.user === 'messi' && this.password === 'goat') {
      this.disCarrusel = true;
      this.disLogin = false;
    } else {
      this.disLogin = true;
      this.disCarrusel = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
