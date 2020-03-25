// Test Commit
const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Cook Kelly';

const wes = {
  name: 'gearoid',
  age: 100,
  cool: true
}
//   For
    for (let i = 100; i <= 120; i += 2) {
      console.log(i);
    }

    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }

    // For of

    for (const letter of name) {
        console.log(letter);
      }
  
      for (const number of numbers) {
        console.log(number)
      }
      // For in - used for looping over keys of an object
      for (const prop in wes) {
        console.log(prop)
      }
  
      const baseHumanStats = {
        feet: 2,
        arms: 2,
        eyes: 2,
        head: 1
      };
  
      function Human(name) {
        this.name = name;
      }
  
      Human.prototype = baseHumanStats;
  
      const cook2 = new Human('Cookie');
  
      console.log(Object.entries(cook2))
  
      for (const prop in cook2) {
        console.log(prop);
      }
  
      // While Loop
      let cool = true;
      let i = 1;
      while (cool === true) {
        console.log('You are cool');
        i++;
        if (i > 100) {
          cool = false;
        }
      }
//  examples

      const basket = ['apples', 'oranges', 'bananas'];
const tescoBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in tescoBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}