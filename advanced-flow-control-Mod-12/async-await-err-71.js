function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

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

function handleError(err) {
  console.log("uh oh");
  console.log(err);
}

async function go() {
  const pizza = await makePizza(["pineapple"]);
  console.log(pizza);
}
// when you mark a function with async it will return a promise

go().catch(handleError);

go()
  .then((result) => {
    console.log(result);
  })
  .catch(handleError);

  async function gogo() {
      const result = await go();
  }
//  Catch it at runtime
  gogo().catch(handleError);

//   make a safe function with a HOF
  function makeSafe(fn, errorHandler) {
      return function() {
          fn().catch(errorHandler)
      }
  }
const safeGo = makeSafe(go, handleError);
safeGo();

