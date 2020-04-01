const textarea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

console.log(textarea);
console.log(result);
console.log(filterInputs);

const filters = {
  sarcastic: function(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  funky: function() {},
  unable: function() {}
};

function transformText(text) {
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = mod.join('');
}

textarea.addEventListener("input", e => transformText(e.target.value));
