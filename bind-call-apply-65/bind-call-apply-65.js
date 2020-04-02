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
  calculate: function(taxRate) {
    return this.total + this.total * taxRate;
  }
};
const total = bill.calculate(0.21);
console.log(total);
const calc = bill.calculate.bind({ total: 758 });
console.log(calc(0.21));
