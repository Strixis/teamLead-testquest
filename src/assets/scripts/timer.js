class Timer {
  constructor(settings) {
    this.hours = settings.time.hours;
    this.minutes = settings.time.minutes;
    this.seconds = settings.time.seconds;

    this.timerClass = settings.timerClass;
    this.hoursClass = settings.hoursClass;
    this.minutesClass = settings.minutesClass;
    this.secondsClass = settings.secondsClass;

    this.time = 0;

    this.timerElem = null;
    this.hoursElem = null;
    this.minutesElem = null;
    this.secondsElem = null;
  }

  run() {
    this._init();
  }

  _init() {
    this.timerElem = document.querySelector(`.${this.timerClass}`);
    this.hoursElem = this.timerElem.querySelector(`.${this.hoursClass}`);
    this.minutesElem = this.timerElem.querySelector(`.${this.minutesClass}`);
    this.secondsElem = this.timerElem.querySelector(`.${this.secondsClass}`);

    this.time = this.hours * 60 * 60 * 1000 + this.minutes * 60 *1000 + this.seconds * 1000 + 1000;

    this._renderTime();

    let timer = setInterval(() => {
      this._switchTime();
      this._renderTime();
    }, 1000);
    setTimeout(() => clearInterval(timer), this.time);
  }

  _renderTime() {
    this.hoursElem.textContent = this.hours;
    this.minutesElem.textContent = this.minutes;
    this.secondsElem.textContent = this.seconds;
  }

  _switchTime() {
    if (this.seconds === 0 && this.minutes === 0) {
      this.hours -= 1;
      this.minutes = 59;
      this.seconds = 59
    } else if (this.seconds === 0) {
      this.minutes -= 1;
      this.seconds = 59
    } else {
      this.seconds -= 1;
    };
  }
};

export { Timer };
