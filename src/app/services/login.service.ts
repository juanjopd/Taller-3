import { Injectable } from '@angular/core';
import { Credencial } from '../credencial';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public credenciales: Credencial[];
  constructor() {
    this.credenciales= [
      {
        user: "messi",
        password: "goat"
      }
    ]
   }
}