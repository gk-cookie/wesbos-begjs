function Slider(slider) {
  if (!slider instanceof Element) {
    throw new Error("No Slider passed in");
  }
  let current;
  let previous;
  let next;

  const slides = slider.querySelectorAll(".slides");
  const prevButton = document.querySelector(".goToPrev");
  const nextButton = document.querySelector(".goToNext");
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
