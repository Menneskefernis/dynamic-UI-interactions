const mainNav = document.getElementById('main');
const navItems = document.querySelectorAll(".main-item");
const burgerMenuBtn = document.getElementById('burger-menu-btn');

const toggleNav = (e) => {
  const classList = e.target.classList;
  classList.contains('open') ? null : closeAll();
  classList.toggle('open');
};

const closeAll = () => {
  navItems.forEach((item) => {
    item.classList.remove('open');
  });
};

const unfoldBurgerMenu = () => {
  mainNav.classList.toggle('collapse');
  burgerMenuBtn.classList.toggle('animate');
};

navItems.forEach((item) => item.addEventListener('click', toggleNav));
burgerMenuBtn.addEventListener('click', unfoldBurgerMenu);