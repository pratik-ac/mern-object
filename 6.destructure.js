// Create an array called countryList. Add some countries like Nepal, India,China..
// Use array destructure to print out data.

const countryList = ["Nepal", "India", "China", "USA", "UK", "Australia"];
const [firstCountry, secondCountry, thirdCountry, ...restCountries] =
  countryList;
console.log(`First Country: ${firstCountry}`);
console.log(`Second Country: ${secondCountry}`);
console.log(`Third Country: ${thirdCountry}`);
console.log(`Rest Countries: ${restCountries}`);
