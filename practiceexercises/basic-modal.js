const buttonPressed = document.querySelector(".button");
const modal = document.querySelector(".modal");
const pictures = document.querySelectorAll(".picture");

function picClick() {
  console.log(`picture clicked`);
}

function handlePictureButtonClick(event) {
  const button = event.currentTarget;
  const picture = button.closest(".picture");
  console.log(picture);
}

pictures.forEach(button =>
  button.addEventListener("click", handlePictureButtonClick)
);
