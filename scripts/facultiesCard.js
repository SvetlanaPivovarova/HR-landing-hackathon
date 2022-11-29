export class facultiesCard {
  constructor(element) {
    this._title = element.title;
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

    this._element.querySelector('.faculties-card__title').textContent = this._title;
    this._element.querySelector('.faculties-card__courses').textContent = this._courses;
    this._element.querySelector('.faculties-card__number-courses').textContent = this._quantity;

    return this._element;
  }
}