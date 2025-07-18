const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  } else if (e.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
});
