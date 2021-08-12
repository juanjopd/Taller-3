import { Component, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-imagenes-carousel',
  templateUrl: './imagenes-carousel.component.html',
  styleUrls: ['./imagenes-carousel.component.css']
})
export class ImagenesCarouselComponent  implements OnInit{
  
  @Input() imagenes: string[] = []
  private index = 0
  public url = ""

  constructor(){}

  ngOnInit(): void{

  }
  
  anterior(){
    if (this.index == 0) {
      this.index = this.imagenes.length
    }
    this.index--
    this.url = this.imagenes[this.index]
  }

  siguiente(){
    if (this.index == this.imagenes.length-1) {
      this.index = -1
    }
    this.index++
    this.url = this.imagenes[this.index]
  }


}
