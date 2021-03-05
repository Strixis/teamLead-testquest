import { Carousel } from './carousel';
import { Timer } from './timer';
import { Scroll } from './scrolling';

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
    minutes: 30,
    seconds: 0,
  },
  timerClass: 'timer',
  hoursClass: 'hours',
  minutesClass: 'minutes',
  secondsClass: 'seconds',
})

const scroll = new Scroll({
  linkClass: 'button-order',
  linkTag: 'a',
  targetId: 'order-form',
});

carousel.run();
timer.run();
scroll.run();
