const buttonPressed = document.querySelector(".button");
const modal = document.querySelector(".modal");

function buttPress() {
  console.log("button pressed");
  if (modal.classList.contains("open")) {
    document.querySelector(".modal").classList.remove("open");
  } else {
    document.querySelector(".modal").classList.add("open");
  }
}
buttonPressed.addEventListener("click", buttPress);
