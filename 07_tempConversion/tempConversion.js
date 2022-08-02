function roundOneDecimal(num){
  return Math.round(num*10) / 10;
}

const ftoc = function(temp) {
  let convertedTemp = (temp - 32) * (5/9)
  return roundOneDecimal(convertedTemp);
};

const ctof = function(temp) {
  let convertedTemp = (temp * (9/5))+32
  return roundOneDecimal(convertedTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
