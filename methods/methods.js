const gearoid = {
  name: "Gearoid Kelly",
  sayHi: function() {
    console.log(`Hey Gearoid`);
    return `Hey Gearoid`;
  }
};
console.log(gearoid);

class Testing {
  hello() {
    console.log("testing");
  }
  test = () => console.log("testing");
}

function whisperHi() {
  console.log(`Hi Gearoid......`);
}

const whisperHi2 = () => {
  console.log(`Hi Gearoid......`);
};

console.log(whisperHi);
console.log("hello");
const button = document.querySelector(".clickMe");
console.log(button);
function handleClick() {
  console.log(`Good Clicking`);
}
button.addEventListener(`click`, handleClick);
