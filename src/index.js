import 'fonts';
import 'styles';

import { Carousel } from 'scripts/carousel';
import { Timer } from 'scripts/timer'

const carousel = new Carousel({
  carouselClass: 'carousel',
  currentSlideClass: 'carousel_slide__current',
  prevSlideClass: 'carousel_slide__prev',
  nextSlideClass: 'carousel_slide__next',
  controlsClass: 'carousel_controls',
  controlLeftClass: 'carousel_left-control',
  controlRightClass: 'carousel_right-control',
});

const timer = new Timer({
  time: {
    hours: 0,
    minutes: 2,
    seconds: 10,
  },
  timerClass: 'timer',
  hoursClass: 'hours',
  minutesClass: 'minutes',
  secondsClass: 'seconds',
})

carousel.run();
timer.run();
