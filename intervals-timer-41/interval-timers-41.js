function buzzer() {
  console.log("ENNNGGGGG");
}

setTimeout(function() {
  console.log("Done");
}, 500);

setTimeout(buzzer, 1000);

setInterval(buzzer, 500);

function setImmediateInterval(funcToRun, ms) {
  funcToRun();
  return setInterval(funcToRun, ms);
}

setImmediateInterval(buzzer, 2000);
// setInterval will not run right away, if you want to start it straight away, you have to make it seperate

function destroy() {
  document.body.innerHTML = `<p>Destroyed</p>`;
}

const bombTimer = setTimeout(destroy, 5000);

window.addEventListener("click", function() {
  console.log("You clicked! You saved the page");
  clearTimeout(bombTimer);
});

const poopInterval = setInterval(function() {
  console.log("poop");
}, 1000);

setTimeout(function () {
    clearInterval(poopInterval);
}, 6000)

