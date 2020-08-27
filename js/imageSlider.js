const images = document.querySelectorAll('.image');
const navDots = document.getElementById('nav-dots');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

let imageIndex = 0;
let animationEnd = true;
let current = images[imageIndex];
let last = current;

const setSlide = () => {
  last.style.display = 'none';
  current.style.display = 'block';
};

const changeSlide = (e) => {
  if (e) clearInterval(interval);
  if (!animationEnd) return;
  animationEnd = false;
  
  let direction;
  e ? direction = Number(e.target.closest('div').dataset.direction) : direction = 1;
  imageIndex += direction;
  
  handleEndToEndSkipping();
  setImages();
  current.style.display = 'block';
  selectNavDot(imageIndex);
  triggerAnimation(current, last, direction);

  current.addEventListener('animationend', () => {
    last.style.display = 'none';
    removeClasses(current, last);
    animationEnd = true;
  });
};

const setImages = () => {
  last = current;
  current = images[imageIndex];
};

const handleEndToEndSkipping = () => {
  if (imageIndex > images.length - 1) imageIndex = 0;
  if (imageIndex < 0) imageIndex = images.length - 1;
};

const triggerAnimation = (current, last, direction) => {
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

const handleDotNavigation = (e) => {
  if (!animationEnd) return;
  const index = Number(e.target.dataset.index);
  imageIndex = index;
  last = current;
  current = images[index];
  selectNavDot(imageIndex);
  setSlide();
  clearInterval(interval);
};

const renderNavDots = () => {
  images.forEach((image, index) => {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    dot.setAttribute('data-index', index);
    navDots.appendChild(dot);
  });
  navDots.style.left = `calc(50% - ${navDots.getBoundingClientRect().width / 2}px)`;
};

const selectNavDot = (index) => {
  const dotArr = Array.from(navDots.children);

  dotArr.forEach((dot) => dot.classList.remove('selected'));
  dotArr[index].classList.add('selected');
};


const interval = setInterval(changeSlide, 5000);

setSlide(imageIndex);
renderNavDots();
selectNavDot(imageIndex);

nextBtn.addEventListener('click', changeSlide);
previousBtn.addEventListener('click', changeSlide);
Array.from(navDots.children).forEach((dot) => dot.addEventListener('click', handleDotNavigation));

