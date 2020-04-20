import { generateOptions } from "./utils-79.js";
import { fromSelect, toSelect } from "./elements-79.js";
import { currencies } from "./currencies-79.js";
import { handleInput } from "./handlers-79.js";
const endpoint = "https://api.exchangeratesapi.io/latest";
const ratesByBase = {};

export async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  if (!ratesByBase[from])
    console.log(`we dont have ${from} to convert to ${to}. Go get it`);
  const rates = await fetchRates(from);
  console.log(rates);
  ratesByBase[from] = rates;

  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

export function init() {
  const form = document.querySelector(".app form ");
  const optionsHTML = generateOptions(currencies);

  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;
  form.addEventListener("input", handleInput);
}
