import { Injectable } from '@angular/core';
import { Categoria } from '../categoria';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {


  public categorias: Categoria[]
  constructor() { 
    this.categorias= [
      {
        nombre: "Futbol",
        imagenes: ["https://images.ole.com.ar/2021/08/06/x3hDY8_kE_720x0__1.jpg", "https://okdiario.com/img/2019/12/02/messi-balon-de-oro-deportes2-interior.jpg"]
      }, 
      {
        nombre: "Baloncesto",
        imagenes: ["https://pbs.twimg.com/profile_images/1414720865262968838/VJhbQ4L4.jpg", "	https://pbs.twimg.com/profile_images/1414720865262968838/VJhbQ4L4.jpg"]
      }
    ]
  }
}
