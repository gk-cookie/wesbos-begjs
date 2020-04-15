// AJAX =
// Async
// Javascript
// And
// Xml

function handleError(err) {
  console.log("an error");
  console.log(err);
}
const endpoint = "https://api.github.com/users/wesbos";

const cookPromise = fetch(endpoint);
cookPromise
  .then((response) => {
    return response.json();
    console.log(response);
  })
  .then((data) => {
    console.log(data);
    console.log(data.bio);
    console.log(data.name);
    console.log(data.location);
    
  })
  .catch(handleError);
