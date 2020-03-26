const buttonPressed = document.querySelector(".button");
const modal = document.querySelector(".modal");
const pictures = document.querySelectorAll(".picture");

function picClick() {
  console.log(`picture clicked`);
}
function openModal() {
  document.querySelector(".modal").classList.add("open");
  console.log(`modal Open`);
  
}

function handlePictureButtonClick(event) {
  const button = event.currentTarget;
  const picture = button.closest(".picture");
  const imgSrc = picture.querySelector("img").src;
  console.log(imgSrc);
  const inner = `<img src="${imgSrc.replace("300", "600")}" />`;
  console.log(inner);
  
  modal.innerHTML = inner;
  openModal();
}

pictures.forEach(button =>
  button.addEventListener("click", handlePictureButtonClick)
);
