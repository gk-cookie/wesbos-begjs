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

const buns = ['egg', 'wonder', 'brioche'];

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