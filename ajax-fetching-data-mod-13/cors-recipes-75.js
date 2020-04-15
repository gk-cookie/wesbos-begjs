// CORS =
// Cross (not allowed to share data with other websites)
// Origin (you can grab info from your own domain name)
// (by default websites(domain name) cannot talk to each other)
// R
// S

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

const baseEndpoint = `http://www.recipepuppy.com/api/`;
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector("form.search");

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  console.log(form.query.value);
  
  const el = event.currentTarget;
  el.submit.disabled = true;

  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes);
  el.submit.disabled = false;
  
};

form.addEventListener("submit", handleSubmit);
fetchRecipes("pizza");
