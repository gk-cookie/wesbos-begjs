// global variable - can be accessed by any other js running on the page
const first = `gearoid`;

const age = 100;
function howsThings() {
  const well = `howya`;
}

console.log(age);
// console.log(well);
// this is function scope
// you can call the function to access well

function howOldAmI() {
  const name = `Helen`;
  console.log(age);
  console.log(name);
}
howOldAmI();
// if a function cannot find a variable within the function it will go up a level higher(found age from above)

// if (1997 === 1997) {
//     let upTheBanner = true
// }
// console.log(upTheBanner);
// { } is a block, this will not work as upTheBanner is within the block and not global scope

let upTheBanner;
if (1997 === 1997) {
  upTheBanner = true;
}
console.log(upTheBanner);
// create the variable above and then update it in the block upTheBanner = true

// //for(var i = 0; i < 10; i++) {
//     console.log(i);
// }
// because this is var there is a random value for i outside the scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// using let it means there is no value for i outside of the block
// var variables are funtion scoped, let & const variables are block scoped

// const dog = `sally`;

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = `rover`;
//   logdog();
// }

// go();
// consoles sally, it is taken from where it is designed not inside the function - logdog its sally so it stays at sally

function sayHello(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
sayHello(`gearoid`);

// How I used scope in Space Invaders
function drawShip() {
  ctx.beginPath();
  ctx.rect(x, y, 125, 125);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}
// I used this to create the ship in the space invaders game, x,y are not global variables
// I cannot access x and y unless I give them a value outside the function i.e.
// let x = canvas.width / 2;
// let y = canvas.height - 200;
// I now can use the x and y in the global scope as they are global variables

