const offerBtn = document.querySelector('.offers__btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

offerBtn.addEventListener('click', () => {
  popup.classList.add('popup_active');
});

const closePopup = element => {
  element.classList.remove('popup_active');
}

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