console.log("starting");
setTimeout(function () {
  console.log("running");
}, 2000);
console.log("ending");

const go = document.querySelector(".go");
function wait(ms = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function animate(e) {
  const el = e.currentTarget;
  el.textContent = "GO!";
  wait(2000)
    .then(() => {
      el.classList.add("circle");
      return wait(500);
    })
    .then(() => {
      el.classList.add("red");
      return wait(250);
    })
    .then(() => {
      el.classList.remove("circle");
      return wait(350);
    })
    .then(() => {
      el.classList.remove("red");
      el.classList.add("purple");
      return wait(1200);
    })
    .then(() => {
      el.classList.add("fadeOut");
    });
}
go.addEventListener("click", animate);
