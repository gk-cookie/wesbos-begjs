const turtle = document.querySelector(".turt");
function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) {
    return;
  }
  console.log(event.key);
}

window.addEventListener("keydown", handleKeyDown);
