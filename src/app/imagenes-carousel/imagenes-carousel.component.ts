import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-carousel',
  templateUrl: './imagenes-carousel.component.html',
  styleUrls: ['./imagenes-carousel.component.css']
})
export class ImagenesCarouselComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
