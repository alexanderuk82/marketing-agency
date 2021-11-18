//**********SEARCH ICON TOP BAR NAV */
const searchIcon = document.querySelector('.header__search--btn');
const input = document.querySelector('.header__search');

searchIcon.addEventListener('click', e => {
  e.preventDefault();
  input.classList.toggle('noInput');
});

//**********SLIDER TESTIMONIALS*/

const slides = document.querySelectorAll('.testimonial__content__wrapper');
const btnLeft = document.querySelector('.testimonial__btns--left');
const btnRight = document.querySelector('.testimonial__btns--right');

let activeSlides = 0;

btnRight.addEventListener('click', () => {
  activeSlides++;

  if (activeSlides > slides.length - 1) {
    activeSlides = 0;
  }
  setActiveSlide();
});
btnLeft.addEventListener('click', () => {
  activeSlides--;
  if (activeSlides < 0) {
    activeSlides = slides.length - 1;
  }
  setActiveSlide();
});

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[activeSlides].classList.add('active');
}

/****===BTN OPTIONS FORM */

const btnOpt = document.querySelectorAll('.contact__form__option-btn');

btnOpt.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

/****===MENU NAVIGATION */

const openMenu = document.getElementById('openMenu');
const closeMenu = document.querySelector('.navigation__close');

const menu = document.querySelector('.navigation');

const links = document.querySelectorAll('.navigation__navi__link');

openMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

closeMenu.addEventListener('click', close);
function close() {
  menu.classList.remove('active');
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView();
    close();
  });
});

/****===SHOW SCROLL UP */

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.querySelector('.scroll');

  if (this.scrollY >= 700) scrollUp.classList.add('show');
  else scrollUp.classList.remove('show');
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.header__hero--center`);

sr.reveal(`.header__hero--left , .header__hero--rigth`, { interval: 100 });

sr.reveal(`.wedoimg-right`, { delay: 500 });
sr.reveal(`.wedoimg-left`, { delay: 700 });
sr.reveal(`.wedo__center`, { interval: 100 });
sr.reveal(`.featured__box`, { interval: 300 });
sr.reveal(`.whoweare__content`, { interval: 200, delay: 300 });
sr.reveal(`.process__content--img`, { delay: 300 });
sr.reveal(`.process__img`, { origin: 'right', delay: 200 });
sr.reveal(`.process__content__list--item`, { interval: 200, delay: 100 });

sr.reveal(`.process__img`, { origin: 'right', delay: 200 });
sr.reveal(`.testimonial__logo`, { delay: 600 });
sr.reveal(`.testimonial__content__wrapper.active`, { origin: 'left' });

sr.reveal(`.h1-title`, { interval: 200 });

sr.reveal(`.contact__form__field`, { interval: 90 });
sr.reveal(`.contact__form__option-btn`, { origin: 'right', interval: 100 });

// sr.reveal(`.home__social`, { delay: 600 });
// sr.reveal(`.about__img, .contact__box`, { origin: 'left' });
// sr.reveal(`.about__data, .contact__form`, { origin: 'right' });
// sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {
//   interval: 100,
// });
