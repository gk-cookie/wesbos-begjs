//  function calculateBill() {
//   console.log(`running bill calculator`);
//   const total = 100 * 1.21;
//   return total;
// }

// const myTotal = calculateBill();
// console.log(`Your total is $${myTotal}`);

function calculateBill(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);
  return total;
}

console.log(calculateBill(120, 0.21));
// total2 = calculateBill(105, .21);
// total3 = calculateBill(100, .13);
// console.log(total2);
// console.log(total3);

// const dinnerBill = 175
// const dinnerTip = .25
// console.log(calculateBill(dinnerBill, dinnerTip))

// function doctorize(name){
// return `Dr. ${name}`
// }
// function yell(name = `Johnny`){
//   return `HEY ${name.toUpperCase()}`;
// }
// console.log(doctorize(`Tom`), yell(`Jim`));
// console.log(yell(doctorize(`Tommy`)));
// console.log(yell());

const inchesToCm = inches => inches * 2.54;

console.log(inchesToCm(4));

// function add(a, b = 3) {
//   const total = a + b;
//   return total;

// }
// const add = (a, b = 3) => a + b;
// console.log(add(9));

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0 
//   }
//   return baby;
// }


// const makeABaby = (first, last) => ({name: `${first} ${last}`,
// age: 0 }) 
// console.log(makeABaby(`Brian`, `Kelly`));

// (function(age) {
//   console.log(`Running an Anon Function`);
//   return `i am ${age} year's old`;
// } )(34);


