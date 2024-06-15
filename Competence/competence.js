//Compétences

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function moveSlide(step) {
  showSlide(currentSlide + step);
  resetSlideInterval();
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 7000); // Change slide every 7 seconds
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 7000); // Change slide every 7 seconds
});
