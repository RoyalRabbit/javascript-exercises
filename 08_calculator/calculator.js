const add = function(...numbers) {
  let accumulator=0;
	numbers.forEach(number=>accumulator+=number);
  return accumulator;
};

const subtract = function(...numbers) {
	let accumulator=numbers[0];
	numbers.forEach((number, index)=>{
    if (index === 0) return;
    accumulator -= number;
    
  })
  return accumulator;
};

const sum = function(array) {
  return array.reduce((accumulator,current)=>accumulator+=current,0);
  
};

const multiply = function(array) {
  return array.reduce((accumulator, current)=>accumulator*=current);
};

const power = function(number, power) {
	let total=number;
  for (let i=1; i<power; i++) {;
    total *= number;
  }
  return total;
};

const factorial = function(a) {
	if (a===0) return 1;
  return a*factorial(a-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
