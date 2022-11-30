class offerCard {
  constructor(data) {
    this._role = data.role;
    this._faculty = data.faculty;
    this._vacancy = data.vacancy;
    this._description = data.description;
  }

  _getTemplate() {
    const offer = document
      .querySelector(".open-offer-template")
      .content.querySelector(".open-offer__item")
      .cloneNode(true);

    // вернуть DOM-элемент карточки
    return offer;
  }
  generateCard() {
    this._element = this._getTemplate();

    // добавить данные
        this._element.querySelector(".open-offer__heading").textContent = this._vacancy;
    this._element.querySelector(".open-offer__text").textContent = this._description;

    // вернуть элемент наружу
    return this._element;
  }
}

export { offerCard };
