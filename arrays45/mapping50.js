const emojis = [
  "\u{1f605}",
  "\u{1f606}",
  "\u{1f607}",
  "\u{1f608}",
  "\u{1f609}",
  "\u{1f610}"
];

console.log(emojis);

function secondName(name) {
  return `${name} Kelly`;
}

function capital(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`; 
}

const fullNames = [`brian`, `gearoid`, `joe`, `michael`, `martin`].map(secondName);
console.log(fullNames);

const fullCaps = [`brian`, `gearoid`, `joe`, `michael`, `martin`].map(capital).map(secondName);
console.log(fullCaps);

const beforeVat = [34, 55, 72, 78, 42, 122];
const afterVat = beforeVat.map(total => total * 1.21);
console.log(beforeVat);
console.log(afterVat);

const people = [
    {
        birthday: `April 6th, 1979`,
        names: {
            first: `Martin`,
            last: `Kelly`

        }
    },
    {
        birthday: `June 4th, 1980`,
        names: {
            first: `Michael`,
            last: `Kelly`

        }
    },{
        birthday: `July 29th, 1982`,
        names: {
            first: `Joe`,
            last: `Kelly`

        }
    },{
        birthday: `April 10th, 1985`,
        names: {
            first: `Gearoid`,
            last: `Kelly`

        }
    }
]