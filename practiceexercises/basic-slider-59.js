function Slider(slider) {
  if (!slider instanceof Element) {
    throw new Error("No Slider passed in");
  }
  let current;
  let prev;
  let next;

  const slides = slider.querySelector(".slides");
  const prevButton = document.querySelector(".goToPrev");
  const nextButton = document.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current, prev, next);
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }
  startSlider();
  applyClasses();
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
