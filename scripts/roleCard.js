class roleCard {
  constructor(data) {
    this._image = data.image;
    this._heading = data._heading;
    this._text = data.text;
  }

  _getTemplate() {
    const role = document
      .querySelector(".role-template")
      .content.querySelector(".role__card")
      .cloneNode(true);

    // вернуть DOM-элемент карточки
    return role;
  }
  generateCard() {
    this._element = this._getTemplate();

    // добавить данные
    this._element.querySelector(".role__image").textContent = this._image;
    this._element.querySelector(".role__heading").textContent = this._heading;
    this._element.querySelector(".role__text").textContent = this._text;

    // вернуть элемент наружу
    return this._element;


    this._picture = this._element.querySelector('.role__image');
    this._likesAmount = this._element.querySelector('.card__like-amount');
    this._setEventListeners();

    // добавить данные
    this._element.querySelector('.role__heading').textContent = this._heading;
    this._element.querySelector('.role__text'').textContent = this._text;
    this._picture.src = this._image;
    this._picture.alt = this._name;


  }
}

export { roleCard };
