// CORS =
// Cross (not allowed to share data with other websites)
// Origin (you can grab info from your own domain name)
// (by default websites(domain name) cannot talk to each other)
// R
// S

// CORS Policy - wesbos.com is allowed to ask for data and we can return it
// Policy must come from server where data is requested from

const baseEndpoint = `http://www.recipepuppy.com/api/`;

async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
}

fetchRecipes("pizza");
