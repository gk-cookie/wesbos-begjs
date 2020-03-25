const names = [`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`,
`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`,
`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`,
`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`,
`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`,
`Martin`, `Mike`, `Joe`, `Gearoid`, `Brian`];

console.log(names[16]);
console.log(names.length);
console.log(names[names.length - 5]);

names.push(`Gerard`);
names.unshift(`Helen`);
names.splice(4,6);
console.log(names);

const names2 = [`Helen2`, ...names];
console.log(names2);

const names3 = [...names2.slice(0, 5), `Gerard2`, ...names2.slice(11)];
console.log(names3);    

const names4 = [ ...names3.slice(0,5), ...names3.slice(7)];
console.log(names4);


// Mutation Method

const numbers = [1,2,3,4,5,6,7,8,9];

/*const numbersBackwards = *//* numbers.reverse(); *//* Do not need to create a new const */
// console.log(numbersBackwards); The numbers array has mutated to numbersBackwards
console.log(numbers);

//Immutable - They do not change the original data
const pizzaSlice = numbers.slice(3, 7);
console.log(pizzaSlice);
console.log(numbers);

const namesAge = [
    { name: `Marty`, age: 40},
    { name: `Mike`, age: 39},
    { name: `Joey`, age: 36},
    { name: `Jimmy`, age: 35},
    { name: `Cookie`, age: 34},
    { name: `Briano`, age: 27}
];

//Static Methods
Array.of(`Cooraclare`, `Cree`);
[...`Cooraclare`];

const range = Array.from({ length: 10}, function(){
    return `Cookie`;
});

console.log(range);

function createRange(start, end) {
    const range1 = Array.from({ length: end - start}, function(item, index){
        return index = start;
    });
    return range1;  
}
createRange(3, 11);

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const buns = ['white', 'sesame', 'brioche'];

const meats = {
  chicken: 10,
  beef: 5,
  pork: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

Object.keys(meats).forEach(qty => {
    console.log(qty);
})

Object.entries(meats).forEach(entry => {
    console.log(entry);
})

Object.entries(meats).forEach(entry => {
    // const key = entry[0];
    // const value = entry[1];
  const [key, value] = entry;
    console.log(key, value);
    
})
// Instance Method
console.log(buns.join(`or`));
// turns an array into a string

const meatString = `steak, burgers, sausages, chicken`;
console.log(meatString.split(`,`));
// turns a string into an array. The , splits the string to create 4 elements

const lastTopping = toppings.pop();
console.log(toppings);
console.log(lastTopping);
// Removes last item in the array

toppings.push(lastTopping);
// Adds it back with a push

const firstTopping = toppings.shift();
console.log(firstTopping);
// Removes first item with shift

toppings.unshift(firstTopping);
// add it back with unshift

let newToppings = toppings.slice(0, toppings.length - 1);
// removes last item without mutating array

newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);
//  adding it back in

const toppingsCopy = toppings.slice(0);
toppings[2] = `black pudding`;
console.log(toppingsCopy);
console.log(toppings);
// creates copy of orginal array

const toppingsCopy2 = [...toppings];
// creates a copy using spreads

toppingsCopy2.splice(3,5);
console.log(toppingsCopy2);
// taking out items 3 to 5 using splice

const chiliIndex = toppings.indexOf(`Chili`);
console.log(chiliIndex);
// check the index of an item

const isInToppings = toppings.includes(`curry`);
console.log(isInToppings);
// .includes checks if an item is in the array

if(!isInToppings) {
    toppings.push(`Curry`);
}
console.log(toppings);
// if curry is not on the toppings, add it
















