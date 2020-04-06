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

async function go() {
  try {
    const pizza = await makePizza(["pineapple"]);
    console.log(pizza);
  } catch (err) {
    console.log("ohh noo");

    console.log(err);
  }
}

go();
