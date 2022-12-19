import * as variables from '../utils/constants.js';

variables.elementsScrollArr.forEach(element => {
  element.addEventListener('click', () => {
    variables.elementScroll.scrollIntoView({behavior: 'smooth'});
  });
});

const openPopup = element => {
  element.classList.add('popup_active');
}
const closePopup = element => {
  element.classList.remove('popup_active');
}
variables.offerBtn.addEventListener('click', () => {
  openPopup(variables.popup);
});

variables.popup.addEventListener('click', evt => {
  if(evt.target === variables.popup) {
    closePopup(variables.popup);
  }
});
variables.popupCloseBtn.addEventListener('click', () => {
  closePopup(variables.popup);
});
variables.popup.addEventListener('keydown', evt => {
  if(evt.key === 'Escape') {
    closePopup(variables.popup);
  }
});

const scrollPage = () => {
  const pageElement = variables.expert.getBoundingClientRect().top;

  for(let i = 0; i < variables.lists.length; i++) {
    if(pageElement >= -280 && pageElement <= 630) {
      setTimeout(() => {
        variables.lists[i].classList.add('expert__list_active');
        window.removeEventListener('scroll', scrollPage);
      }, i * 1200);
    }
  }
}
scrollPage();

variables.burgerBtn.addEventListener('click', () => {
  variables.headerContainer.classList.toggle('header__nav-container_active');
  variables.burgerBtn.classList.toggle('header__btn-burger_inactive');
  variables.header.classList.toggle('header_active');
});


window.addEventListener('scroll', scrollPage);