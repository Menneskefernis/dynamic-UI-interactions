const images = document.querySelectorAll('.image');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

let index = 0;
let animationEnd = true;
let current = images[index];
let last = current;

images[index].style.display = 'block';

const showSlides = (e) => {
  if (!animationEnd) return;
  animationEnd = false;

  const direction = Number(e.target.closest('div').dataset.direction);
  index += direction;

  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

  last = current;
  current = images[index];

  current.style.display = 'block';

  addClasses(current, last, direction);

  current.addEventListener('animationend', () => {
    last.style.display = 'none';
    removeClasses(current, last);
    animationEnd = true;
  });
};

const addClasses = (current, last, direction) => {
  if (direction > 0) {
    last.classList.add('slide-out-forwards');
    current.classList.add('slide-in-forwards');
  } else {
    last.classList.add('slide-out-backwards');
    current.classList.add('slide-in-backwards');
  }
};

const removeClasses = (current, last) => {
  last.classList.remove('slide-out-forwards', 'slide-out-backwards');
  current.classList.remove('slide-in-forwards', 'slide-in-backwards');
};

nextBtn.addEventListener('click', showSlides);
previousBtn.addEventListener('click', showSlides);

