import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-carousel',
  templateUrl: './titulos-carousel.component.html',
  styleUrls: ['./titulos-carousel.component.css']
})
export class TitulosCarouselComponent {
  
  @Input() titulos = ["Fútbol, Baloncesto"];
  active = 1;
}
