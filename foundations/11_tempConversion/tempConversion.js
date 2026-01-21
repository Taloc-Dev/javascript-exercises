const convertToCelsius = function(temperature) {
  if(typeof temperature !== "number") return "ERROR";
  const tempCelsius = (temperature - 32) * (5 / 9)
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
