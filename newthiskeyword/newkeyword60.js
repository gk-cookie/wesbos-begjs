const myDate = new Date(`March 25, 2024`);
console.dir(myDate);
console.log(myDate.getFullYear());

const names = [`Cook`, `Gearoid`];
const cook = { name: `Cook` };

function Pizza() {
    console.log(`Making a Pizza`);
    
}

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);
console.log(pepperoniPizza.constructor);
console.log(pepperoniPizza instanceof Pizza);




