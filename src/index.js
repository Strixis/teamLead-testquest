import 'fonts';
import 'styles';

import { Carousel } from 'scripts/carousel';

const carousel = new Carousel({
  carouselClass: 'carousel',
  currentSlideClass: 'carousel_slide__current',
  prevSlideClass: 'carousel_slide__prev',
  nextSlideClass: 'carousel_slide__next',
  controlsClass: 'carousel_controls',
  controlLeftClass: 'carousel_left-control',
  controlRightClass: 'carousel_right-control',
});

carousel.run();
