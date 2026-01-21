const convertToCelsius = function(temperature) {
  if(typeof temperature !== "number") return "ERROR";
  const tempCelsius = (temperature - 32) * (5 / 9)
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  if(typeof temperature !== "number") return "ERROR";
  const tempFahrenheit = temperature * 9 / 5 + 32;
  return parseFloat(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
