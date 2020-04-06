function makePizza(toppings = []) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    if (toppings.includes("pineapple")) {
      reject("No pineapple pizzas");
    }

    const amountOfTimeToBake = 500 + toppings.length * 200;
    setTimeout(function () {
      // Promise holds 2 arguments 1. resolve 2 reject
      // when you are ready, you can resolve this promise
      //  if something went wrong, you can reject the promise

      resolve(`Here is your pizza with the toppings ${toppings.join(" ")}`);
    }, amountOfTimeToBake);
  });
  return pizzaPromise;
}
function handleError(err) {
  console.log("Heres the Error");
  console.log(err);
}
// you just have to put one catch at the end to see the reject

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
    return makePizza(["pineapple"]);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza([
      "feta",
      "cheddar",
      "peppers",
      "spinach",
      "ham",
      "swiss",
      "Blackened Chicken",
      "BBQ Sauce, pepperoni",
      "mushrooms",
      "onions"
    ]);
  })
  .then((pizza) => {
    console.log(pizza);
  })
  .catch(handleError);

//   run them concurrently

// const pizzaPromise1 = makePizza(["Blackened Chicken", "BBQ Sauce"]);
// const pizzaPromise2 = makePizza(["Ham", "Cheese"]);
// const pizzaPromise3 = makePizza([
//   "feta",
//   "cheddar",
//   "peppers",
//   "spinach",
//   "ham",
//   "swiss",
//   "Blackened Chicken",
//   "BBQ Sauce, pepperoni",
//   "mushrooms",
//   "onions",
// ]);

// const dinnerPromise = Promise.all([
//   pizzaPromise1,
//   pizzaPromise2,
//   pizzaPromise3,
// ]);
// dinnerPromise.then((pizzas) => {
//   console.log(pizzas);
// });

// dinnerPromise.then(function (pizzas) {
//   const [texas, hamAndCheese, Supreme] = pizzas;
//   console.log(texas, hamAndCheese, Supreme);
// });

// const firstPizzaPromise = Promise.race([
//   pizzaPromise1,
//   pizzaPromise2,
//   pizzaPromise3,
// ]);

// firstPizzaPromise.then((pizza) => {
//   console.log("You must be hungry, here is the first one ready");
//   console.log(pizza);
// });

// makePizza(["pineapple", "cheese"])
//   .then((pizza) => {
//     console.log(pizza);
//   })
//   .catch(handleError);
