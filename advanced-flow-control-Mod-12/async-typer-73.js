function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Creating async typer using for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = "";
//   for (const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     console.log(soFar);
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// Recursion

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    //     // exit condition

    if (index <= text.length) {
      const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
      await wait(amountOfTimeToWait);
      drawLetter();
    }
  }
  //     // when this function draw() runs, kick off drawLetter
  drawLetter();
}

const els = document.querySelectorAll("[data-type]");
els.forEach(draw);
