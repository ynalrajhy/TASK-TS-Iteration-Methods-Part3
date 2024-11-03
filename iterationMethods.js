const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// 1) Using `filterHighTemperatures` function return a new array containing temperatures greater than or equal to 25 degrees Celsius.
function filterHighTemperatures(temps) {
  return temps.filter((temp) => temp >= 25);
}

// Using `filterLowTemperatures` function return a new array containing temperatures less than 20 degrees Celsius.
function filterLowTemperatures(temps) {
  return temps.filter((temp) => temp < 20);
}

// Using `convertCelsiusToFahrenheit` function Convert the entire list of temperatures to Fahrenheit, and return it. Use the formula (Celsius * 9/5) + 32.
function convertCelsiusToFahrenheit(temps) {
  return temps.map((temp) => (temp * 9) / 5 + 32);
}

// Using `labelTemperatures` function return a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20
function labelTemperatures(temps) {
  return temps.map((temp) => {
    if (temp >= 25) return "Warm";
    else if (temp < 20) return "Cool";
    else return "Mild";
  });
}

// Using `getMaxTemperature` function Calculate and return the highest temperature of the month.
function getMaxTemperature(temps) {
  return Math.max(...temps);
}

// Using `getMinTemperature` Calculate and return the lowest temperature of the month.
function getMinTemperature(temps) {
  return Math.min(...temps);
}

module.exports = {
  temperatures,
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
