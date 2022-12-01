const offerBtn = document.querySelector('.offers__btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

const expertBtn = document.querySelector(".expert__btn");
const headerBtn = document.querySelector(".header__btn");
const introBtn = document.querySelector(".intro__button");
const elementScroll = document.querySelector("#open-offers");
const roleButton = document.querySelectorAll(".quiz__button_type_yellow");

const lists = document.querySelectorAll('.expert__list');

const scroll = element => {
  element.addEventListener('click', () => {
    elementScroll.scrollIntoView({behavior: 'smooth'});
  });
};
scroll(expertBtn);
scroll(headerBtn);
scroll(introBtn);
scroll(roleButton[0]);
scroll(roleButton[1]);

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

const scrollPage = () => {
  const page = window.pageYOffset;

  for(let i = 0; i < lists.length; i++) {
    if(page >= 1200 && page <= 2300) {
      setTimeout(() => {
        lists[i].classList.add('expert__list_active');
        window.removeEventListener('scroll', scrollPage);
      }, i * 1200);
    }
  }
}
scrollPage();

window.addEventListener('scroll', scrollPage);