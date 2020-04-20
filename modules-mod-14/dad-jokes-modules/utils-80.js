export function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not) {
      console.log('Ahh we used that one last time, look again');
      return randomItemFromArray(arr, not);
    }
    return item;
  }
  
  export async function fetchJoke(loader) {
    loader.classList.remove("hidden");
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    loader.classList.add("hidden");
    return data;
  }