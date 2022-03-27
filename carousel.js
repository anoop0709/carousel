
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const preButton = document.querySelector('.carousel_button--left');

const dotNav = document.querySelector('.carousel_nav');
const dotIndicator = Array.from(dotNav.children);

//calculate the width of each slide and positioned to left


const slideSize = slides[0].getBoundingClientRect().width;
const setslidePosition = (slide,index) => {
    slide.style.left = slideSize * index + 'px';
};
slides.forEach(setslidePosition);

//function for moving the side left or right

const moveToslide = (track,currentSlide,targetslide) => {
    track.style.transform = 'translatex(-' + targetslide.style.left +')';
    currentSlide.classList.remove('current_slide');
    targetslide.classList.add('current_slide');
}





//when i click left,moves slides to the left

preButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToslide(track,currentSlide,prevSlide);
})



//when i click right,moves slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToslide(track,currentSlide,nextSlide);
})



//when i clicked the nav indicator its moves to that slide

dotNav.addEventListener('click', e => {
    const targetdot = e.target.closest('button');
    if(!targetdot) return;
})
