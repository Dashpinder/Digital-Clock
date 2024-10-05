// script.js
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Show initial slide
showSlide(slideIndex);

// Function to show slides
function showSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;  // Wrap around to first slide
  } else if (index < 0) {
    slideIndex = totalSlides - 1;  // Wrap around to last slide
  }
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Next slide
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Previous slide
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);
