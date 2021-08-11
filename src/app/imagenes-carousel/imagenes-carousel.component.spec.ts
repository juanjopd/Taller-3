import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesCarouselComponent } from './imagenes-carousel.component';

describe('ImagenesCarouselComponent', () => {
  let component: ImagenesCarouselComponent;
  let fixture: ComponentFixture<ImagenesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
