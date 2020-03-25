const age = 100;
if (age > 70) {
  console.log('In your seventies');
} else if (age > 60) {
  console.log('In your sixties');
} else if (age > 50) {
  console.log('In your 50s');
} else {
  console.log('Nothing was true');
}

const name = "Jim";
const last = "Bob";

if (name === "Tim" || (name === "Jim" && last === "Bob")) {
  console.log("Coool Name!");
}

function nameIsAwesome(name) {
    return "awesome".includes(name);
  }

  const isAwesomeName = "awesome".includes(name);
if (isAwesomeName) {
  console.log("SUPER COOL AWESOME NAME");
}

if (nameIsAwesome("Jim")) {
  console.log("COOL NAME JIM");
}
