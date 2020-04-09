// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://reqres.in/api/albums")
  .then((response) => response.json())
  .then(console.log);


async function fetchStarship() {
  const response = await fetch("https://reqres.in/api/albums");
  const data = await response.json();
  console.log(data);
}

fetchStarship();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://reqres.in/api/users",
  "https://reqres.in/api/posts",
  "https://reqres.in/api/albums",
];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json()))
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };

const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  }

  getData();

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://reqres.in/api/users",
  "https://reqresTYPO.in/api/posts",
  "https://reqres.in/api/albums",
];

const getData2 = async function() {
    try {
      const [ users, posts, albums ] = await Promise.all(urls2.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', users);
      console.log('posta', posts);
      console.log('albums', albums);
    } catch (err) {
      console.log('ooooooops', err);
    }
  }

  getData2();