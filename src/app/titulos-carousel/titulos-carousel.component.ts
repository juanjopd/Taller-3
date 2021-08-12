import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../categoria'
import { ImagenesService } from '../services/imagenes.service';

@Component({
  selector: 'app-titulos-carousel',
  templateUrl: './titulos-carousel.component.html',
  styleUrls: ['./titulos-carousel.component.css']
})
export class TitulosCarouselComponent implements OnInit{
  
  index: number = 0
  categorias: Categoria [] = []

  active=1
  constructor(private imagenesService: ImagenesService){  }

  ngOnInit(): void {
    this.categorias = this.imagenesService.categorias
  }

  click(index:number){
    this.index = index
  }
}
