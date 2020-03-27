const buttonPressed = document.querySelector(".button");
const innerModal = document.querySelector(".inner-modal");
const pictures = document.querySelectorAll(".picture");
const outerModal = document.querySelector(".outer-modal");

function picClick() {
  console.log(`picture clicked`);
}

function closeModal() {
  modalOuter.classList.add("open");
}

function handlePictureButtonClick(event) {
  const button = event.currentTarget;
  const picture = button.closest(".picture");
  const imgSrc = picture.querySelector("img").src;
  console.log(imgSrc);
  innerModal.innerHTML = `<img src="${imgSrc.replace("300", "600")}" />`;

  outerModal.classList.add(`open`);
}

pictures.forEach(button =>
  button.addEventListener("click", handlePictureButtonClick)
);
