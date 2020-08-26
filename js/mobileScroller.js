const linksList = document.getElementById('nav-items');
const caretLeft = document.getElementById('caret-left');
const caretRight = document.getElementById('caret-right');

const items = Array.from(linksList.children);

const getElementMargins = () => {
    const margin = getComputedStyle(items[0]).margin.split("px")[0];
    return margin * 2;
};

const scrollerWidth = items.reduce((totalWidth, item) => totalWidth + (item.getBoundingClientRect().width + getElementMargins()), 0);
const halfItemWidth = (scrollerWidth / items.length) / 2;
const endPadding = getComputedStyle(items[items.length - 1]).paddingRight;

const handleCarets = () => {
    linksList.scrollLeft > halfItemWidth ? caretLeft.classList.add('visible') : caretLeft.classList.remove('visible');
    (scrollerWidth - linksList.clientWidth - halfItemWidth - endPadding) > linksList.scrollLeft ? caretRight.classList.add('visible') : caretRight.classList.remove('visible');
};

linksList.addEventListener('scroll', handleCarets, {passive: true});