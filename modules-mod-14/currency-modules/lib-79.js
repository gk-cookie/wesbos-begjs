const endpoint = "https://api.exchangeratesapi.io/latest";
const ratesByBase = {};

export async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
  }

  export async function convert (amount, from, to) {
    if (!ratesByBase[from])
      console.log(`we dont have ${from} to convert to ${to}. Go get it`);
    const rates = await fetchRates(from);
    console.log(rates);
    ratesByBase[from] = rates;
  
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
  }

  