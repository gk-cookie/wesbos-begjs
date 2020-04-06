console.log("starting");
setTimeout(function() {
  console.log("running");
}, 2000);
console.log("ending");

const go = document.querySelector(".go");

go.addEventListener("click", function(e) {
  const el = e.currentTarget;
  el.textContent = "GO!";
  setTimeout(function() {
    el.classList.add("circle");
    setTimeout(function() {
      el.classList.add("red");
      setTimeout(function() {
        el.classList.remove("circle");
        setTimeout(function() {
          el.classList.remove("red");
          el.classList.add("purple");
          setTimeout(function() {
            el.classList.add("fadeOut");
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});
// This is whats called callback hell because everything needs to be nested