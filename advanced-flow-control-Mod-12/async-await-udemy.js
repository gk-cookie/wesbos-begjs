// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then(console.log);

// async function fetchUsers() {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await resp.json();
//   console.log(data);
// }

// fetchUsers();

const urls = [
  "https://reqres.in/api/users",
  "https://reqres.in/api/posts",
  "https://reqres.in/api/albums",
];

const promises = urls.map((url) => {
  return fetch(url).then((resp) => resp.json());
});

console.log(promises);

Promise.all(promises).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});

const getData = async function () {
  try {
    const [users, posts, albums] = await promises;
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch(err) {
    console.log("oopps", err);
  }
};
getData();
