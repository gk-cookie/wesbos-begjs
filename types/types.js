// Strings
const name = "Gearoid";
const middle = " Patrick";
const last = " Kelly";
const sentence = " This is \"class\""

const hello = "Hello my name is " + name  + middle  + last  + " Pleased to meet you";
console.log(hello); 

const hello2 = `Hello my name is ${name + middle  + last } Please to meet you`;
console.log(hello2);

// Numbers

const sweets = 132;
const kids = 5;
const kidsGetEach = Math.floor(sweets / kids);
console.log(`Each kid gets ${kidsGetEach} sweets each`);

// Objects

const person = {
    first: 'Gearoid',
    last: 'Kelly',
    age: 34
};

// null & undefined
let dog;
console.log(dog);
// checking
