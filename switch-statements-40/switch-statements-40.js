const turtle = document.querySelector(".turt");
let x = 0;
let y = 0;
const speed = 5;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) {
    return;
  }
  switch (event.key) {
    case "ArrowUp":
      y -= 1;
      rotate = -90;
      break;
    case "ArrowDown":
      y += 1;
      rotate = 90;
      break;
    case "ArrowLeft":
      x -= 1;
      flipped = true;
      rotate = 0;
      break;
    case "ArrowRight":
      x += 1;
      flipped = false;
      rotate = 0;
      break;
    default:
      console.log("That is not a valid move");
  }
  turtle.setAttribute(
    "style",
    `
  --x: ${x * speed}px;
  --y: ${y * speed}px;
  --rotateX: ${flipped ? '180deg' : '0'};
  --rotate: ${rotate}deg; 
   `);
}

window.addEventListener("keydown", handleKeyDown);
