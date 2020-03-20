const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];


function logTopping(topping, index, originalArray) {
    console.log(topping, index, originalArray);

    const nextTopping = originalArray[index + 1];
    const prevTopping = originalArray[index - 1];

    nextTopping ? console.log(nextTopping) : ``;
    prevTopping ? console.log(prevTopping) : ``;
    
    index === originalArray.length -1
    ? console.log(`You are done`)
    : console.log(`getting next topping`);
    

    console.log(`------pizza--------`);
    
    

};


toppings.forEach(logTopping);

toppings.forEach(topping => {
    console.log(topping);
});

