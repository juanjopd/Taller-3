import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosCarouselComponent } from './titulos-carousel.component';

describe('TitulosCarouselComponent', () => {
  let component: TitulosCarouselComponent;
  let fixture: ComponentFixture<TitulosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
