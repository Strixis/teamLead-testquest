class Scroll {
  constructor(settings) {
    this.linkClass = settings.linkClass;
    this.linkTag = settings.linkTag
    this.targetId = settings.targetId;

    this.linksList = null;
    this.targetElem = null;
  }

  run() {
    this._init();
    this._scroll();
  }

  _init() {
    this.linksList = document.querySelectorAll(`${this.linkTag}.${this.linkClass}`);
    this.targetElem = document.getElementById(this.targetId);
  }

  _scroll() {
    this.linksList.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        this.targetElem.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }
};

export { Scroll };
