const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const preButton = document.querySelector('.carousel_button--left');
const dotIndicator = Array.from(dotNav.children);
const dotNav = document.querySelector('.carousel_nav');


const slideSize = slides[0].getBoundingClientRect();

slides[0].style.left = slideSize * 0 + 'px';
slides[1].style.left = slideSize * 1 + 'px';
slides[2].style.left = slideSize * 2 + 'px';
slides[3].style.left = slideSize * 3 + 'px';
slides[4].style.left = slideSize * 4 + 'px';





//when i click left,moves slides to the left
//when i click right,moves slides to the right

//when i clicked the nav indicator its moves to that slide
//