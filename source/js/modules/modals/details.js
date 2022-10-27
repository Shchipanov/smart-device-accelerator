const detailsOne = document.querySelector('.link__container');
const detailsTwo = document.querySelector('.link__container-lost');

function viewportСhange() {
  // Выполняем действие, если ширина меньше 1000px
  let viewport = window.innerWidth;
  if (viewport > 768) {
    detailsOne.open = true;
    detailsTwo.open = true;
  }
  window.addEventListener('resize', function () {
    detailsOne.open = false;
    viewportСhange();
});

}

export {viewportСhange};
