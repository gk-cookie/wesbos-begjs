const isCool = true;

if (!isCool) {
  console.log("You are not cool");
}

let name = "cookie";
// !name returns false
// !!name returns true
// A string is truthy, one bang makes it false and the second makes it true
// Coercion is turning truthy and falsey into true and false

//  Ternary
const count = 1;
// let word;
// if (count === 1) {
//     word = 'item';
// } else {
//     word = 'items';
// }
// This can be written in short hand below

const word = count === 1 ? "item" : "items";

const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);

const isAdmin = true;
function showAdminBar() {
  console.log("Showing Admin Bar");
}
isAdmin ? showAdminBar() : null;
// This is only run if its true

function check1() {
  return true;
  console.log("Running Check 1");
}

function check2() {
  return true;
  console.log("Running Check 2");
}

function check3() {
  return true;
  console.log("Running Check 3");
}

if (check1() && check2() && check3()) {
  console.log("All Checks Passed");
} else {
  console.log("Some checks failed");
}

isAdmin && showAdminBar();

if(isAdmin) showAdminBar();

