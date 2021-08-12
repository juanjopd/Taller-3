import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitulosCarouselComponent } from './titulos-carousel/titulos-carousel.component';
import { ImagenesCarouselComponent } from './imagenes-carousel/imagenes-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosCarouselComponent,
    ImagenesCarouselComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
