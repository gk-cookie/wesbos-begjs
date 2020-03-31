const age = 52;

if (age > 70) {
  console.log(" In your seventies");
} else if (age > 60) {
  console.log("In your sixties");
} else if (age > 50) {
  console.log("In your fifties");
} else {
  console.log(`Nothing was true`);
}

function slugify(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\ s/g, "-").toLowerCase();
  }
  return sentence.replace(/\ s/g, "-");
}

const name = "cookie";
const last = "kelly";

if (name === "cookie" || last === "collins") {
  console.log("at least half the name is right");
}

if (name === "cookie" && last === "kelly") {
  console.log("The full name is right");
}

const place = "cooraclare";

if (place.includes("clare")) {
  console.log(place);
}

// includes method returns a boolean

const placeInclude = place.includes("clare");

if (placeInclude) {
  console.log("Clare is in Cooraclare");
}

const dog = "sally";

if (dog) {
  console.log("you have a dog");
} else {
  console.log("you dont have a dog");
}
