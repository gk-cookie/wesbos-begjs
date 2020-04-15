// AJAX =
// Async
// Javascript
// And
// Xml

const endpoint = "https://api.github.com/users/wesbos";
const userEl = document.querySelector(".user");

function handleError(err) {
  console.log("an error");
  console.log(err);
}
async function displayUser(username) {
  userEl.textContent = `loading...`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);
  console.log(data.bio);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog}`;
}

displayUser();
