class roleCard {
  constructor(data) {
    this._image = data.image;
    this._heading = data._heading;
    this._text = data.description;
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
  }
}

export { roleCard };
