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
  this.id = Math.floor(Math.random()*16777215).toString(16); 
}
const supremePizza = new Pizza(['olives', 'mushroom', 'chicken'], 'Cookie Kelly');
const chessePizza = new Pizza(['cheddar', 'mozz', 'swiss'], 'Tommy Kelly');

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


