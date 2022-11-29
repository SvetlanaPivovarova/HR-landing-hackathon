export class facultiesCard {
  constructor(element) {
    this._title = element.title;
    this._img = element.img;
    this._courses = element.courses;
    this._quantity = element.quantity;
  }
  _getTemplate() {
    const facultiesTemplate = document.querySelector('.faculties-template').content;
    const facultiesCard = facultiesTemplate.querySelector('.faculties-card').cloneNode(true);

    return facultiesCard;
  }
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._facultiesTextContainer = this._element.querySelector('.faculties-card__text-container');
    this._facultiesImg = this._element.querySelector('.faculties-card__img');

    this._element.querySelector('.faculties-card__title').textContent = this._title;
    this._facultiesImg.src = this._img;
    this._facultiesImg.alt = this._title;
    this._element.querySelector('.faculties-card__courses').textContent = this._courses;
    this._element.querySelector('.faculties-card__number-courses').textContent = this._quantity;

    return this._element;
  }
  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._showText();
    });
  }
  _showText() {
    this._facultiesTextContainer.classList.add('faculties-card__text-container_visible');
    this._facultiesImg.remove();
  }
}