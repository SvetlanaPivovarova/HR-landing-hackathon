const offerBtn = document.querySelector('.offers__btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

const expertBtn = document.querySelector('.expert__btn');
const headerBtn = document.querySelector('.header__btn');
const introBtn = document.querySelector('.intro__button');
const elementScroll = document.querySelector('#open-offers');

const scroll = element => {
  element.addEventListener('click', () => {
    elementScroll.scrollIntoView({behavior: 'smooth'});
  });
}
scroll(expertBtn);
scroll(headerBtn);
scroll(introBtn);

const openPopup = element => {
  element.classList.add('popup_active');
}
const closePopup = element => {
  element.classList.remove('popup_active');
}
offerBtn.addEventListener('click', () => {
  openPopup(popup);
});

popup.addEventListener('click', evt => {
  if(evt.target === popup) {
    closePopup(popup);
  }
});
popupCloseBtn.addEventListener('click', () => {
  closePopup(popup);
});
popup.addEventListener('keydown', evt => {
  if(evt.key === 'Escape') {
    closePopup(popup);
  }
});