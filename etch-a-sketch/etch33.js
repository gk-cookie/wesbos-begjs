const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");

const shakebutton = document.querySelector(".shake");
const squarebutton = document.querySelector(".square");
const cookiebutton = document.querySelector(".cookie");
const MOVE_AMOUNT = 10;

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  hue = hue + 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "s":
        makeSquare();
        break;
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
      
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function() {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}

function makeSquare() {
  // x and y have a value at this point
  // you can update x and y

  ctx.beginPath();
  ctx.moveTo(x, y);
  x += 150;
  ctx.lineTo(x, y);
  y += 150;
  ctx.lineTo(x, y);
  x -= 150;
  ctx.lineTo(x, y);
  ctx.closePath();
  y -= 150;
  ctx.stroke();
}

function drawCookie() {
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(150, 400);
  ctx.lineTo(150, 550);
  ctx.lineTo(300, 550);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 400);
  ctx.lineTo(550, 400);
  ctx.lineTo(550, 550);
  ctx.lineTo(400, 550);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(600, 400);
  ctx.lineTo(750, 400);
  ctx.lineTo(750, 550);
  ctx.lineTo(600, 550);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(800, 400);
  ctx.lineTo(800, 550);
  ctx.moveTo(800, 475);
  ctx.lineTo(900, 400);
  ctx.moveTo(800, 475);
  ctx.lineTo(900, 550);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(975, 400);
  ctx.lineTo(975, 550);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(1200, 400);
  ctx.lineTo(1050, 400);
  ctx.lineTo(1050, 550);
  ctx.lineTo(1200, 550);
  ctx.moveTo(1050, 475);
  ctx.lineTo(1200, 475);
  ctx.stroke();
}

window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);
squarebutton.addEventListener("click", makeSquare);
cookiebutton.addEventListener("click", drawCookie);
