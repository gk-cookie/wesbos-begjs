function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found");
  }
  const images = Array.from(gallery.querySelectorAll("img"));
  console.log(images);
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  function openModal() {
    console.info("Opening Modal");
    if (modal.matches(".open")) {
      console.log("Modal already open");
      return;
    }
    modal.classList.add("open");
  }

  function closeModal() {
    modal.classList.remove("open");
  }
    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
          closeModal();
        }
    
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    console.log(el);
    modal.querySelector("img").src = el.src;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("figure p").textContent = el.dataset.description;
    currentImage = el;

    openModal();
  }

  images.forEach(image =>
    image.addEventListener("click", e => showImage(e.currentTarget))
  );
  modal.addEventListener("click", handleClickOutside);
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
