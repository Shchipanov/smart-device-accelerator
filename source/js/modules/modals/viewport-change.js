import {accordion} from './accordion';

const detailsOne = document.querySelector('.link__container');
const detailsTwo = document.querySelector('.link__container-lost');

function viewportСhange() {

  // Выполняем действие, если ширина больше 768px
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
