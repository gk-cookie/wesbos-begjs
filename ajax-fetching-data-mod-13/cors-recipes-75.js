// CORS =
// Cross (not allowed to share data with other websites)
// Origin (you can grab info from your own domain name)
// (by default websites(domain name) cannot talk to each other)
// Resource
// Sharing

// CORS Policy - wesbos.com is allowed to ask for data and we can return it
// Policy must come from server where data is requested from

// localhost        localhost
// ↑                ↑
// wont work        ↓
// ↓                proxy
// recipepuppy      ↑
//                  will work
//                  ↓
//                  recipepuppy

const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
      <a href="${recipe.href}">View Recipe →</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
