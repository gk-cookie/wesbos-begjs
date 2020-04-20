import { generateOptions } from "./utils-79.js";
import currencies from "./currencies-79.js";
import { handleInput } from "./handlers-79.js";
import { convert } from "./lib-79.js";
import { fromSelect, toSelect } from "./elements-79.js"


const form = document.querySelector(".app form ");
const endpoint = "https://api.exchangeratesapi.io/latest";
const ratesByBase = {};

const optionsHTML = generateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
form.addEventListener("input", handleInput);
