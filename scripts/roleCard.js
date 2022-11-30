class roleCard {
  constructor(data) {
    this._image = data.img;
    this._heading = data.heading;
    this._text = data.description;
  }

  _getTemplate() {
    const role = document
      .querySelector(".role-template")
      .content.querySelector(".roles__item")
      .cloneNode(true);

    // вернуть DOM-элемент карточки
    return role;
  }
  generateCard() {
    this._element = this._getTemplate();

    // добавить данные
    this._element.querySelector(".roles__image").src = this._image;
    this._element.querySelector(".roles__heading").textContent = this._heading;
    this._element.querySelector(".roles__text").textContent = this._text;

    // вернуть элемент наружу
    return this._element;
  }
}

export { roleCard };
