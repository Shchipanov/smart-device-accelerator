const openParagraph = document.querySelector('.about__paragraph');

const aboutButton = document.querySelector('.about__btn');

function addText() {
  aboutButton.addEventListener('click', function () {
    if (openParagraph.classList.contains('about__paragraph')) {
      openParagraph.classList.remove('about__paragraph');
      openParagraph.classList.add('about__paragraph--open');
      aboutButton.textContent = 'Свернуть';
    } else {
      openParagraph.classList.remove('about__paragraph--open');
      openParagraph.classList.add('about__paragraph');
      aboutButton.textContent = 'Подробнее';
    }
  });
}

export {addText};
