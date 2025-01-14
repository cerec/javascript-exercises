const convertToCelsius = function (num) {
  //x -32 * 5 / 9
  let result = (num - 32) * 5 / 9
  let rounded = Math.round(result * 10) / 10

  return rounded;
};

const convertToFahrenheit = function (num) {
  //x * 1,8 +32
  let result = num * 1.8 + 32
  let rounded = Math.round(result * 10) / 10

  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
