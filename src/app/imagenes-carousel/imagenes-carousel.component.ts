import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-imagenes-carousel',
  templateUrl: './imagenes-carousel.component.html',
  styleUrls: ['./imagenes-carousel.component.css']
})
export class ImagenesCarouselComponent {

  @Output() images  = ["https://images.ole.com.ar/2021/08/06/x3hDY8_kE_720x0__1.jpg", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/02/15753211669003.jpg"];

}
