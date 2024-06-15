//Compétences
// document.addEventListener("DOMContentLoaded", function () {
//   const progressPercentages = {
//     HTML: 90,
//     CSS: 80,
//     React: 60,
//     JavaScript: 70,
//     Node: 60,
//   };

//   const progressIDs = {
//     HTML: "html-progress",
//     CSS: "css-progress",
//     React: "react-progress",
//     JavaScript: "js-progress",
//     Node: "node-progress",
//   };

//   for (let technologie in progressPercentages) {
//     if (progressPercentages.hasOwnProperty(technologie)) {
//       const progressBarID = progressIDs[technologie];
//       const progressBar = document.getElementById(progressBarID);
//       const percentage = progressPercentages[technologie];
//       if (progressBar) {
//         progressBar.style.width = `${percentage}%`;
//         progressBar.textContent = `${percentage}%`;
//       }
//     }
//   }
// });
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
