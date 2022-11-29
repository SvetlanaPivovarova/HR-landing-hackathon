import {faculties} from './facultiesArr.js';
import {facultiesCard} from './facultiesCard.js'

const facultiesContainer = document.querySelector('.faculties__card-container');

const createCard = (item) => {
  const card = new facultiesCard(item);

  return card.generateCard();
}

const renderCard = element => {
  facultiesContainer.append(element);
}

faculties.forEach(item => {
  renderCard(createCard(item));
});
