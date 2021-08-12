import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitulosCarouselComponent } from './titulos-carousel/titulos-carousel.component';
import { ImagenesCarouselComponent } from './imagenes-carousel/imagenes-carousel.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BotonComponent } from './boton/boton.component';
import { ServicesComponent } from './services/services.component';
import { ImagenesService } from './services/imagenes.service';

@NgModule({
  declarations: [
    AppComponent,
    TitulosCarouselComponent,
    ImagenesCarouselComponent,
    BotonComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
