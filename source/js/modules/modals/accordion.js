let details = document.querySelectorAll('.link__container');

// eslint-disable-next-line no-undef
for (i = 0; i < details.length; i++) {
  // eslint-disable-next-line no-undef
  details[i].addEventListener('toggle', accordion);
}

function accordion(evt) {
  if (!evt.target.open) {
    return;
  }
  // eslint-disable-next-line no-shadow
  details = evt.target.parentNode.children;
  // eslint-disable-next-line no-undef
  for (i = 0; i < details.length; i++) {
    if (
      // eslint-disable-next-line no-undef, eqeqeq
      details[i].tagName != 'DETAILS' ||
      // eslint-disable-next-line no-undef
      !details[i].hasAttribute('open') ||
      // eslint-disable-next-line eqeqeq, no-undef
      evt.target == details[i]
    ) {
      continue;
    }
    // eslint-disable-next-line no-undef
    details[i].removeAttribute('open');
  }
}

export {accordion};
