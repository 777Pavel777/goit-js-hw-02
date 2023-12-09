function getShippingCost(country) {
    
  let price;
  let countryName;

  switch (country.toLowerCase()) {
    case "china":
      countryName = "China";
      price = 100;
      break;

    case "chile":
      countryName = "Chile";
      price = 250;
      break;

    case "australia":
      countryName = "Australia";
      price = 170;
      break;

    case "jamaica":
      countryName = "Jamaica";
      price = 120;
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));