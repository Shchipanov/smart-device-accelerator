import {accordion} from './accordion';

const detailsAll = document.querySelectorAll('[data-details]');

function viewportСhange() {
  if (!detailsAll) {
    // eslint-disable-next-line no-alert
    alert('меня нет на странице');
  } else {
    // Выполняем действие, если ширина больше 767px
    let viewport = window.innerWidth;
    if (viewport < 768) {
      detailsAll.forEach((item) => {
        item.open = false;
      });
      accordion();
    } else {
      detailsAll.forEach((item) => {
        item.open = true;
      });
    }
  }
}
export {viewportСhange};
