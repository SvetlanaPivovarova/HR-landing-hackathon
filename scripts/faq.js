const changeSrc = function() {
  const details = document.querySelectorAll('.faq__accordion-item');

  details.forEach((item) => {
    const image = item.querySelector('.faq__accordion-plus');
    const activeTab = item.querySelector('.faq__accordion-title');
    activeTab.addEventListener('click', function() {
      if (!item.hasAttribute('open')) {
        image.src = "./images/faq-minus-icon.svg";
      } else {
        image.src = "./images/faq-plus-icon.svg";
      }
    })
  })
};

changeSrc();