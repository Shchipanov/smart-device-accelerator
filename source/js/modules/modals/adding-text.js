let paragraphDiv = document.querySelector('.about__wrapper-content');

let element = document.createElement('p');

let elementText = document.createTextNode('Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% из которых продолжают сотрудничество по сей день. На данный момент насчитывается более 14 офисов по всей стране и 20 городов присутствия.');

const aboutButton = document.querySelector('.about__btn');

const addText = () => {
  aboutButton.addEventListener('submit', () => {
    // console.log('click');
    element.appendChild(elementText);

    paragraphDiv.appendChild(element);

    aboutButton.textContent = 'Свернуть';
  });

};

export {addText};
