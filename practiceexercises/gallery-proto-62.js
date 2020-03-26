function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found");
  }
 
  this.gallery = gallery;
  this.images = Array.from(gallery.querySelectorAll("img"));
  console.log(this.images);
  this.modal = document.querySelector(".modal");
  this.prevButton = this.modal.querySelector(".prev");
  this.nextButton = this.modal.querySelector(".next");
  
  

  this.images.forEach(image =>
    image.addEventListener("click", e => showImage(e.currentTarget))
  );
  this.modal.addEventListener("click", handleClickOutside);
}

Gallery.prototype.openModal = function() {
  console.info("Opening Modal");
  if (this.modal.matches(".open")) {
    console.log("Modal already open");
    return;
  }
  this.modal.classList.add("open");
  window.addEventListener("keyup", handleKeyUp);
  this.nextButton.addEventListener("click", showNextImage);
  this.prevButton.addEventListener("click", showPrevImage);
}

function closeModal() {
  this.modal.classList.remove("open");
  window.removeEventListener("keyup", handleKeyUp);
  this.nextButton.removeEventListener("click", showNextImage);
  this.prevButton.removeEventListener("click", showPrevImage);
}
function handleClickOutside(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
function handleKeyUp(event) {
  if (event.key === "Escape") return closeModal();
  if (event.key === "ArrowRight") return showNextImage();
  if (event.key === "ArrowLeft") return showPrevImage();
}
function showNextImage() {
  showImage(currentImage.nextElementSibling || gallery.firstElementChild);
}

function showPrevImage() {
  showImage(currentImage.previousElementSibling || gallery.lastElementChild);
}

function showImage(el) {
  if (!el) {
    console.info("no image to show");
    return;
  }
  console.log(el);
  this.modal.querySelector("img").src = el.src;
  this.modal.querySelector("h2").textContent = el.title;
  this.modal.querySelector("figure p").textContent = el.dataset.description;
  this.currentImage = el;

  openModal();
}

const gallery1 = new Gallery(document.querySelector(".gallery1"));
const gallery2 = new Gallery(document.querySelector(".gallery2"));

console.log(gallery1, gallery2);
