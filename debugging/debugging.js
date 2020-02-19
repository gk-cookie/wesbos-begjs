const people = [
  { name: "Gearoid", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" }
];
debugger;
people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
//  console.log, console.error(changes what it looks like in the cosole)
// console.warn, console.table, .groupend etc
people.forEach((person, index) => {
  if (person.name === `Gearoid`) {
    console.log(`Stupid Name`);
  }
});

// Callstack or stacktrace - lets you see what function called what function etc
function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Gearoid"));
  console.log(name);
}
// go();
// debugging.js:21 Uncaught ReferenceError: doesntExist is not defined
//     at greet (debugging.js:21)
//     at go (debugging.js:26)
//     at debugging.js:29
//     Gives this error, its brok from at line 21 doesnt not exist

// Grabbing Elements
// select elements in dev tools, then go to console $0 is the last element clicked ($1,2 2nd & 3rd)


// Breakpoints
// const people = [
//   { name: "Gearoid", cool: true, country: "Canada" },
//   { name: "Scott", cool: true, country: "Merica" },
//   { name: "Snickers", cool: false, country: "Dog Country" }
// ];
// debugger; ------ When the console is open, gives a break in the code
//  can also set a breakpoint when you click on a line number
// people.forEach((person, index) => {
//   console.log(person.name);
// });

// Scope

// Network Requests
//  network in dev tools, see all of the different files that are needed when running a webpage

// Break On Attribute
// sources in dev tools, set breakpoints in xhr,fetch,dom
// Some Setup Code

function doALotOfStuff() {
  console.group("Doing some stuff");
  console.log("Hey Im one");
  console.warn("watch out!");
  console.error("hey");
  console.groupEnd("Doing some stuff");
}
console.log(doALotOfStuff(people));

function doctorize(name) {
  return `Dr. ${name}`;
}



const button = document.querySelector(".bigger");
button.addEventListener("click", function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain"
    }
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
