function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function srf() {
  console.log("Starting");
  await wait(2000);
  console.log("Running");
  await wait(2000);
  console.log("Finishing");
}
srf();

// Function Declarations
// async function fd() {}
//
// arrow function
// const arrowFn = async () => {};
//
// call back
// window.addEventListener("click", async function () {});
//
//  methods
// const person = {
//   sayHi: async function () {},
// method shorthand
//   async sayHello() {},
// };
//  funtion property
// sayHey: async () => {};

function makePizza(toppings = []) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    if (toppings.includes("pineapple")) {
      reject("No pineapple pizzas");
    }

    const amountOfTimeToBake = 500 + toppings.length * 200;
    setTimeout(function () {
      resolve(`Here is your pizza with the toppings ${toppings.join(" ")}`);
    }, amountOfTimeToBake);
  });
  return pizzaPromise;
}

async function makeDinner() {
  const pizzaPromise1 = makePizza(["Pepperoni"]);
  const pizzaPromise2 = makePizza(["Mushrooms"]);
  const [pep, mush] = await Promise.all([pizzaPromise2, pizzaPromise1]);
  console.log(pep, mush);
}

makeDinner();
const go = document.querySelector(".go");
function wait(ms = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function animate(e) {
  const el = e.currentTarget;
  el.textContent = "GO!";
  await wait(2000);

  el.classList.add("circle");
  await wait(500);

  el.classList.add("red");
  await wait(250);

  el.classList.remove("circle");
  await wait(350);

  el.classList.remove("red");
  el.classList.add("purple");
  await wait(1200);

  el.classList.add("fadeOut");
}
go.addEventListener("click", animate);
