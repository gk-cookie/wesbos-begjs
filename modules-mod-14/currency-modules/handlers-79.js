import { convert } from "./lib-79.js";
import { formatCurrency } from "./utils-79.js";
import { fromInput, fromSelect, toSelect, toEl } from "./elements-79.js";

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
