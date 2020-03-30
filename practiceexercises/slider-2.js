function Slider(slider) {
  let prev;
  let current;
  let next;

  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current, prev, next);
  }
  function applyClasses() {
    prev.classList.add("prev");
    current.classList.add("current");
    next.classList.add("next");
  }

  function move(direction) {
    const classToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classToRemove);
    current.classList.remove(...classToRemove);
    next.classList.remove(...classToRemove);
    if(direction === 'back') {
        [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, 
            prev, current]; 
        }
     else {
        [prev, current, next] = [ current, next, next.nextElementSibling || slides.firstElementChild];
            }
    
    

    applyClasses();  
}
  

  startSlider();
}

const mySlider = Slider(document.querySelector(".slider"));
