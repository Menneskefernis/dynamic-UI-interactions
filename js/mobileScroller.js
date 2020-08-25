const linksList = document.getElementById('nav-items');

let isDown = false;
let startX;
let scrollLeft;

const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = linksList.getBoundingClientRect().left;
};

const handleMove = (e) => {
    if (!isDown) return;
    if (linksList.getBoundingClientRect().right < (window.innerWidth - 150)) return;
    
    e.preventDefault();
    const walk = e.pageX - startX;
    linksList.style.left = `${scrollLeft + walk}px`;
};

linksList.addEventListener('mousedown', handleMouseDown);
linksList.addEventListener('mouseleave', () => isDown = false);
linksList.addEventListener('mouseup', () => isDown = false);
linksList.addEventListener('mousemove', handleMove);