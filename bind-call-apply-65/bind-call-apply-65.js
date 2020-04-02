// new Keyword

const myDate = new Date("August 11, 2024");
console.dir(myDate);
console.log(myDate.getFullYear());

const names = ["cook", "kelly"];
const namesOb = { name: "cook", name: "kelly" };
console.log(names, namesOb);

function Pizza(toppings = [], customer) {
  console.log("Making a Pizza");
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}
const supremePizza = new Pizza(
  ["olives", "mushroom", "chicken"],
  "Cookie Kelly"
);
const chessePizza = new Pizza(["cheddar", "mozz", "swiss"], "Tommy Kelly");

console.log(supremePizza, chessePizza);
console.log(supremePizza.constructor);
console.log(supremePizza instanceof Pizza);

//  when you use the new keyword on a function it creates a new instance object instead of whats being returned from the function

// This Keyword

const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

function tellMeAboutButton() {
  console.log("outside", this);
  setTimeout(function() {
    console.log("inside", this);
  }, 1000);
}
button1.addEventListener("click", tellMeAboutButton);
button2.addEventListener("click", tellMeAboutButton);

const person = {
  name: "Cookie Kelly",
  sayHi() {
    return `Hey ${this.name}`;
  }
};

// const sayHi = person.sayHi;

// Running the sayHi, this is equal to the window
// There is nothing to the left hand side for it to be bound to (sayHi();)

// const sayHi = person.sayHi.bind(person);

// this changes what this is equal to by binding it to another object (person)

const caroline = { name: "Caroline" };
const sayHi = person.sayHi.bind(caroline);
// we can bind the function to caroline and when you run it returns hey caroline
// bind is a method which lives on all functions
// change the this keyword to be equal too in this case a different object (caroline)

const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);
// by calling bind against querySelector, we say when the $
//  function is run, use 'document' as the 'this' value

const wrapper = document.querySelector(".wrapper");
const p = wrapper.querySelector("p");
console.log(p);
console.log(lookFor("p"));

const bill = {
  total: 1000,
  calculate: function(taxRate, tipRate) {
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType, taxRate) {
    console.log(
      `Your meal of ${mealType} with a drink of ${drinkType} was ${this.calculate(
        taxRate
      )}`
    );
  }
};

const bill2 = {
  total: 1000,
  calculate: function(taxRate, tipRate) {
    return this.total + this.total * taxRate + this.total * tipRate;
  }
};

const total = bill.calculate(0.21);
console.log(total);
const calc = bill2.calculate.bind({ total: 758 }, 0.21, 0.25);
console.log(calc());
// you can pass arguments directly into the bind function, this will always be
// first and then you can add in the arguements from the calculate within the bill object

// Call and Apply

const total2 = bill.calculate.call({ total: 758 }, 0.21);
console.log(total2);
// .call does the same thing that .bind does except it calls the function immediately

const total3 = bill.calculate.apply({ total: 2000 }, [0.21]);
console.log(total3);

const myMeal = bill.describe.call(bill, "pizza", "beer", 0.21);
console.log(myMeal);

const myMeal2 = bill.describe.apply(bill, ["pizza", "beer", 0.21]);
console.log(myMeal);
