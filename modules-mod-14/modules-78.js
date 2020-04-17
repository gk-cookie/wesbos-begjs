import { returnHi as sayHi, middle, last } from './utils-78.js';
// can be renamed by using as

// import jimmy from './cook.js';
// you can name the default exports whatever you like
// named in curly brackets, default outside
 
import * as everything from './cook.js';
const name = 'Cook';
// you can use a star to import everything


// console.log(jimmy);
// console.log(returnHi(name));
console.log(sayHi(name));

console.log(middle, last);
console.log(everything);
