const images = document.querySelectorAll('.image');
const forwardBtn = document.getElementById('forward');
const backBtn = document.getElementById('back');

let index = 0;

images[index].style.display = 'block';

const showSlides = (e) => {
  const direction = Number(e.target.parentNode.dataset.direction);
  index += direction;

  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

  images.forEach((image) => {
    image.style.display = 'none';
  });

  images[index].style.display = 'block';
};

forwardBtn.addEventListener('click', showSlides);
backBtn.addEventListener('click', showSlides);