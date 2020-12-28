// ====================================================
// Реализация lazyload
// ====================================================
const lazy_elements = document.querySelectorAll('[data-lazy]');
if (lazy_elements) {
  if (typeof IntersectionObserver === 'function') {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const elem = entry.target;

          const lazy_image = elem.getAttribute('data-lazy');
          elem.setAttribute('src', lazy_image);

          io.unobserve(elem);
        }
      });
    }, {});

    lazy_elements.forEach(function (elem) {
      io.observe(elem);
    });
  } else {
    for (let index = 0; index < lazy_elements.length; index++) {
      const elem = lazy_elements[index];
      const lazy_image = elem.getAttribute('data-lazy');
      elem.setAttribute('src', lazy_image);
    }
  }
}
// END ------------------------
