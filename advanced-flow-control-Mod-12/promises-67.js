function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // Promise holds 2 arguments 1. resolve 2 reject
      // when you are ready, you can resolve this promise
      //  if something went wrong, you can reject the promise

      resolve(`Here is your pizza with the toppings ${toppings.join(" ")}`);
    }, 1000);
  });
  return pizzaPromise;
}

makePizza(["Pepperoni"])
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["Ham", "Cheese"]);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["Blackened Chicken", "BBQ Sauce"]);
  })
  .then(function (pizza) {
    console.log(pizza);
  });

const canadianPromise = makePizza(["pepperoni", "mushrooms", "onions"]);
