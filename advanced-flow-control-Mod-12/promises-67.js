function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    // Promise holds 2 arguments 1. resolve 2 reject
    // when you are ready, you can resolve this promise
    resolve(`Here is your pizza with the toppings ${toppings.join(" ")}`);
    //  if something went wrong, you can reject the promise
  });
  return pizzaPromise;
}

const pepperoniPromise = makePizza(["Pepperoni"]);
const canadianPromise = makePizza(["pepperoni", "mushrooms", "onions"]);

pepperoniPromise.then(function (pizza) {
  console.log("Here she be");
  console.log(pizza);
});
