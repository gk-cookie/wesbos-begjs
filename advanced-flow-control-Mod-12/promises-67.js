function makePizza() {
  const pizzaPromise = new Promise(function (resolve, reject) {
    // Promise holds 2 arguments 1. resolve 2 reject
    // when you are ready, you can resolve this promise
    resolve('pizza');
    //  if something went wrong, you can reject the promise

  });
  return pizzaPromise;
}

const pizza = makePizza();
console.log(pizza);
