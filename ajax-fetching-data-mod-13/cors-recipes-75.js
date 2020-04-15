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

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}


fetchRecipes("pizza");
