const cards = document.querySelectorAll('.product-card__link');
const links = document.querySelectorAll('.product-card__offer-link');

const initClick = (trigger) => {
  trigger.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.closest('.product-card').classList.contains('disabled')) {
        return;
      } else {
        item.closest('.product-card').classList.toggle('selected');
      }
    });
  });
};

const toggleCard = () => {
  initClick(cards);
  initClick(links);
};

export {toggleCard};
