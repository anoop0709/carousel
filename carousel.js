
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

const moveToslide = (track,currentSlide,targetSlide,slides) => {
    track.style.transform = 'translatex(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    
}

//dots moving along with the arrow

 const updateDot = (currentdot,targetdot) => {
    currentdot.classList.remove('current_slide');
    targetdot.classList.add('current_slide');
 }

 //hide the left or right arrow once we reached first or last slide

 const showremove = (targetIndex,preButton,nextButton,slides) => {
     if(targetIndex === 0){
         preButton.classList.add('hide');
         nextButton.classList.remove('hide');
     }else if(targetIndex === slides.length-1){
        preButton.classList.remove('hide');
        nextButton.classList.add('hide');
     }else{
         preButton.classList.remove('hide');
         nextButton.classList.remove('hide');
     }
 }



 //when i click right,moves slides to the right

 nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);


    moveToslide(track,currentSlide,nextSlide);
    updateDot(currentDot,nextDot);
    showremove(nextIndex,preButton,nextButton,slides);
})



//when i click left,moves slides to the left

preButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToslide(track,currentSlide,prevSlide);
    updateDot(currentDot,prevDot);
    showremove(prevIndex,preButton,nextButton,slides);
})







//when i clicked the nav indicator its moves to that slide

dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;
    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotNav.querySelector('.current_slide');
    const targetIndex = dotIndicator.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToslide(track,currentSlide,targetSlide);

    updateDot(currentDot,targetDot);
    showremove(targetIndex,preButton,nextButton,slides);

    })


