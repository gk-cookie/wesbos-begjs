const p = document.querySelector("p");
const divs = document.querySelector("div");
const imgs = document.querySelectorAll(".item img");
const item2 = document.querySelector(".item2");
const item2Image = item2.querySelector("img");

console.log(p);
console.log(divs);
console.log(imgs);
console.log(item2);
console.log(item2Image);

const heading = document.querySelector("h2");
// dir shows the object properties instead of the element itself

console.dir(heading.textContent);
// thats a getter - tells you the information held in heading

console.log(heading.textContent);
heading.textContent = "this changes the heading";
// this is a setter - sets the textcontent property on that element
console.log(heading.textContent);

// innerText v textContent - text content sees hidden and css properties

console.log(heading.innerHTML);

const pintList = document.querySelector(".pints");
console.log(pintList.textContent);

// pintList.textContent = `${pintList.textContent}- 1 pint`;
// console.log(pintList.textContent);

pintList.insertAdjacentText("beforeend", "- 1 pint");
console.log(pintList.textContent);

// Classes

const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
pic.classList.toggle("round");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

// Attributes - Built in & Custom

pic.alt = "Nice Pic"; // setter
pic.width = 200; // setter

console.log(pic.naturalWidth); // getter
//  its 0 because it checks the width before its loaded

pic.addEventListener("load", function() {
  console.log(pic.naturalWidth); // getter
});
// Load gets the data after all the pics and css have been loaded

console.log(pic.getAttribute("alt")); // getter
pic.setAttribute("alt", "really nice pic"); // setter
console.log(pic.getAttribute("alt")); // getter

const custom = document.querySelector(".custom");
console.log(custom.dataset);

custom.addEventListener("click", function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
