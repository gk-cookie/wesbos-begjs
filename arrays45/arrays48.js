
const buns = ["egg", "wonder", "brioche"];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: "Love the burgers", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Drinks are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: "Terrible burgers", rating: 1 }
];

function findBurgerRating(singleFeedback) {
  if (singleFeedback.comment.includes(`burger`)) {
    return true;
  } else {
    return false;
  }
}

const burgerRating = feedback.find(findBurgerRating);
console.log(burgerRating);
