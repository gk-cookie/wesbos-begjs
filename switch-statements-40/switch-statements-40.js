const turtle = document.querySelector(".turt");
let x = 0;
let y = 0;
const speed = 5;

function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) {
    return;
  }
  switch (event.key) {
    case "ArrowUp":
      y -= 1;
      break;
    case "ArrowDown":
      y += 1;
      break;
    case "ArrowLeft":
      x -= 1;
      break;
    case "ArrowRight":
      x += 1;
      break;
    default:
      console.log("That is not a valid move");
  }
  turtle.setAttribute("style", `--x: ${x * speed}px; --y: ${y * speed}px;`);
}

window.addEventListener("keydown", handleKeyDown);
