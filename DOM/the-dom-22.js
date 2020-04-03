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

pintList.insertAdjacentText('beforeend','- 1 pint')
console.log(pintList.textContent);

