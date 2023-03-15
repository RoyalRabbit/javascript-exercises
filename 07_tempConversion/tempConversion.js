const convertToCelsius = function(deg) {
let cel = ((deg-32)*5/9);
cel = parseFloat((Math.round(cel * 10) / 10).toFixed(1));
return cel;
};

const convertToFahrenheit = function(deg) {
let fah = (deg * 9 / 5 + 32);
fah = parseFloat((Math.round(fah*10)/10).toFixed(1));
return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
