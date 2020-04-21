import wait from "waait";
import { name } from "faker";
import { formatDistance, format } from "date-fns";
import axios from "axios";
import { intersection, isEqual } from "lodash";

console.log(`Hello ${name.firstName()} ${name.lastName()}`);
const fakeNames = Array.from({ length: 10 }, name.firstName);
console.log(fakeNames);
const fakeNames1 = Array.from({ length: 10 }, () => {
  return `${name.firstName()} ${name.lastName()}`;
});
console.log(fakeNames1);

async function go() {
  console.log("Going!");
  await wait(200);
  console.log("ending");
}
go();

const diff = formatDistance(new Date(), new Date(2017, 3, 4, 10, 32, 0), {
  addSuffix: true,
});
console.log(diff);

const date = new Date();
const formatted = format(date, `LLLL 'the' do y`);
// all this info is on date-fns
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  console.log(data);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9.1];
const b = [5, 2, 7, 4, 8, 9, 7, 3, 5, 4, 3];

const sameValues = intersection(a, b);
console.log(sameValues);

const name1 = { name: "cook" };
const name2 = { name: "cook" };
console.log(name1 === name2); // returns false
// if you need to check if all the values inside an object are the same use isEqual from lodash
console.log(isEqual(name1, name2));
