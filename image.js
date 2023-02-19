var slider = document.querySelector('.slider');
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var currentSlide = 1;
var slideWidth = 500; // Width of each slide in pixels

// Move the slider to the specified slide
function moveToSlide(slide) {
  slider.style.transform = 'translateX(' + -(slide - 1) * slideWidth + 'px)';
  currentSlide = slide;
}

// Move the slider to the next slide
function nextSlide() {
  if (currentSlide < 4) {
    moveToSlide(currentSlide + 1);
  }
}

// Move the slider to the previous slide
function prevSlide() {
  if (currentSlide > 1) {
    moveToSlide(currentSlide - 1);
  }
}

// Set up click event listeners for the arrow icons
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Set the initial position of the slider
moveToSlide(1);
