function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function draw(el) {
  const text = el.textContent;
  let soFar = "";
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    console.log(soFar);
    el.textContent = soFar;
    const { typeMin, typeMax } = el.dataset;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
  }
}

const els = document.querySelectorAll("[data-type]");
els.forEach(draw);
