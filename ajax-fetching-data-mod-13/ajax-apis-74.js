// AJAX =
// Async
// Javascript
// And
// Xml

const baseEndpoint = "https://api.github.com/";
const usersEndpoint = `${baseEndpoint}/users`;

const userEl = document.querySelector(".user");

function handleError(err) {
  console.log("an error");
  console.log(err);
}
async function displayUser(username) {
  userEl.textContent = `loading...`;
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();

  console.log(data);
  console.log(data.bio);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog}`;
}

displayUser(wesbos).catch(handleError);