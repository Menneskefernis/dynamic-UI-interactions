const linksList = document.getElementById('nav-items');
const caretLeft = document.getElementById('caret-left');
const caretRight = document.getElementById('caret-right');

console.log(linksList.scrollWidth);


const handleCarets = () => {
    linksList.scrollLeft > 60 ? caretLeft.classList.add('visible') : caretLeft.classList.remove('visible');
    console.log(linksList.scrollWidth)
    //(linksList.getBoundingClientRect().width - window.innerWidth - 1) > linksList.scrollLeft ? caretRight.classList.add('visible') : caretRight.classList.remove('visible');
   
};

linksList.addEventListener('scroll', handleCarets, {passive: true});