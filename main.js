const navItems = document.querySelectorAll(".main-item");

const toggleNav = (e) => {
  const classList = e.target.classList;
  classList.contains("open") ? null : closeAll();
  classList.toggle("open");
};

const closeAll = () => {
  navItems.forEach((item) => {
    item.classList.remove("open");
  });
};

navItems.forEach((item) => item.addEventListener("click", toggleNav));
