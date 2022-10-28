function accordion() {

  // var details = document.querySelectorAll("details");
  // for (i = 0; i < details.length; i++) {
  //   details[i].addEventListener("toggle", accordion);
  // }
  // function accordion(event) {
  //   if (!event.target.open) return;
  //   var details = event.target.parentNode.children;
  //   for (i = 0; i < details.length; i++) {
  //     if (
  //       details[i].tagName != "DETAILS" ||
  //       !details[i].hasAttribute("open") ||
  //       event.target == details[i]
  //     ) {
  //       continue;
  //     }
  //     details[i].removeAttribute("open");
  //   }
  // }

  function onToggle(event) {

    if (event.target.open) {
      document.querySelectorAll('.link > details[open]').forEach((el) => {
        // Исключаем из перебора елемент который мы только что открыли
        if (el === event.target) {
          return;
        }

        // Закрываем все остальные елементы <details>
        el.open = false;
      });
    }
  }

  // Вешаем наблюдатель на все елементы <details> внутри акордиона
  document.querySelectorAll('.link > details').forEach((el) => el.addEventListener('toggle', onToggle));
}

export {accordion};
