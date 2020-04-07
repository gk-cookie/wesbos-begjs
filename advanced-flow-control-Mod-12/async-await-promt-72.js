function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  let myPopup = popup;
  popup.classList.remove("open");
  await wait(1000);
  popup.remove();
  myPopup = null;
}

function ask(options) {
  return new Promise(async function (resolve) {
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `
    <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
    </fieldset>`
    );

    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.textContent = "Cancel";
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        "click",
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    popup.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true }
    );

    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add("open");
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = "cancel" in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll("[data-question]");
buttons.forEach((button) => button.addEventListener("click", askQuestion));

const questions = [
  { title: "What is your name?" },
  { title: "What is your age?", cancel: true },
  { title: "Thats is your dogs name?" },
];

console.log(questions);

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  return results;
}

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
    
}
go();
// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
