import { offers } from "./offersArr.js";
import { offerCard } from "./offerCard.js";

const offersContainer = document.querySelector(".open-offer__container");

const createOffers = (offer) => {
  const offerElement = new offerCard(offer);
  return offerElement.generateCard();
};

const render = (element) => {
  offersContainer.append(element);
};

offers.forEach((item) => {
  render(createOffers(item));
});