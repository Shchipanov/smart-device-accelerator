import {accordion} from './accordion';

const detailsOne = document.querySelector('[data-details="first"]');
const detailsTwo = document.querySelector('[data-details="second"]');

function viewportСhange() {

  // Выполняем действие, если ширина больше 767px
  let viewport = window.innerWidth;
  if (viewport > 767) {
    detailsOne.open = true;
    detailsTwo.open = true;
  } else {
    detailsOne.open = false;
    detailsTwo.open = true;
    accordion();
  }
}

export {viewportСhange};
