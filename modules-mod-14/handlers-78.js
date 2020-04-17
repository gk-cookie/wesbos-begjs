export async function handleButtonClick(event) {
const { localCurrency, default: currency } = await import('./currencies.js');
console.log(localCurrency, currency);

}
// You have to destructure the function but default cannot be used hence the currency