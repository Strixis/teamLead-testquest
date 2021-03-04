class Carousel {
  constructor(settings) {
    this.carouselClass = settings.carouselClass;
    this.currentSlideClass = settings.currentSlideClass;
    this.prevSlideClass = settings.prevSlideClass;
    this.nextSlideClass = settings.nextSlideClass;
    this.controlsClass = settings.controlsClass;
    this.controlLeftClass = settings.controlLeftClass;
    this.controlRightClass = settings.controlRightClass;

    this.carouselElem = null;
    this.curentSlideElem = null;
    this.prevSlideElem = null;
    this.nextSlideElem = null;

    this.controlsElem = null;
    this.controlLeftElem = null;
    this.controlRightElem = null;
  }

  run() {
    this._init();
  }

  _init() {
    this.carouselElem = document.querySelector(`.${this.carouselClass}`);
    this.curentSlideElem = this.carouselElem.querySelector(`.${this.currentSlideClass}`);
    this.prevSlideElem = this.carouselElem.querySelector(`.${this.prevSlideClass}`);
    this.nextSlideElem = this.carouselElem.querySelector(`.${this.nextSlideClass}`);

    this.controlsElem = this.carouselElem.querySelector(`.${this.controlsClass}`);
    this.controlLeftElem = this.carouselElem.querySelector(`.${this.controlLeftClass}`);
    this.controlRightElem = this.carouselElem.querySelector(`.${this.controlRightClass}`);

    this._clickHandler = this._clickHandler.bind(this);
    this.controlsElem.addEventListener('click', this._clickHandler);
  }

  _clickHandler(event) {
    if (event.target.tagName === 'BUTTON') this._switchSlide(event);
  }

  _switchSlide(event) {
    if (event.target.classList.contains(this.controlLeftClass)) {
      [this.curentSlideElem, this.prevSlideElem, this.nextSlideElem] = [this.prevSlideElem, this.nextSlideElem, this.curentSlideElem];
      this.curentSlideElem.classList.toggle(this.currentSlideClass);
      this.curentSlideElem.classList.toggle(this.prevSlideClass);
      this.prevSlideElem.classList.toggle(this.prevSlideClass);
      this.prevSlideElem.classList.toggle(this.nextSlideClass);
      this.nextSlideElem.classList.toggle(this.nextSlideClass);
      this.nextSlideElem.classList.toggle(this.currentSlideClass);
    } else if (event.target.classList.contains(this.controlRightClass)) {
      [this.curentSlideElem, this.prevSlideElem, this.nextSlideElem] = [this.nextSlideElem, this.curentSlideElem, this.prevSlideElem];
      this.curentSlideElem.classList.toggle(this.currentSlideClass);
      this.curentSlideElem.classList.toggle(this.nextSlideClass);
      this.prevSlideElem.classList.toggle(this.prevSlideClass);
      this.prevSlideElem.classList.toggle(this.currentSlideClass);
      this.nextSlideElem.classList.toggle(this.nextSlideClass);
      this.nextSlideElem.classList.toggle(this.prevSlideClass);
    } else {
      console.log('Smth go wrong');
    }
  }
};

export { Carousel };
