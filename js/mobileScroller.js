const linksList = document.getElementById('nav-items');
const caretLeft = document.getElementById('caret-left');
const caretRight = document.getElementById('caret-right');

const getItemWidth = () => {
    const items = Array.from(linksList.children);
    const itemWidth = items[0].getBoundingClientRect().width;
    return itemWidth;
};

const handleCarets = () => {
    linksList.scrollLeft > getItemWidth() ? caretLeft.classList.add('visible') : caretLeft.classList.remove('visible');
    ((linksList.scrollWidth - linksList.clientWidth) - getItemWidth()) > linksList.scrollLeft
        ? caretRight.classList.add('visible')
        : caretRight.classList.remove('visible');
};

linksList.addEventListener('scroll', handleCarets, {passive: true});