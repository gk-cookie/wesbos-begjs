import wait from "waait";
import { name } from "faker";
import { formatDistance, format } from "date-fns";

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
