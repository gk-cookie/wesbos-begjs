const myDate = new Date("August 11, 2024");
console.dir(myDate);
console.log(myDate.getFullYear());

const names = ["cook", "kelly"];
const namesOb = { name: "cook", name: "kelly" };
 console.log(names, namesOb);

 function Pizza() {
     console.log('Making a Pizza');
     
 }
 const supremePizza = new Pizza();
 console.log(supremePizza);
 console.log(supremePizza.constructor);
 console.log(supremePizza instanceof Pizza);


 
//  when you use the new keyword on a function it creates a new instance object instead of whats being returned from the function

