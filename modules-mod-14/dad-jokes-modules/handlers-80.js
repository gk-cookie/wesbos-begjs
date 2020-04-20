import { fetchJoke } from "./utils-80.js";
import { jokeHolder, loader, jokeButtonSpan } from "./elements-80.js";
import { randomItemFromArray } from "./utils-80.js";
import { buttonText } from "./button-text-80.js"

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
