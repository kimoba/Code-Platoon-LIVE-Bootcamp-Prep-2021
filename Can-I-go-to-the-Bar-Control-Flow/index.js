// Write a function that takes in a number argument and returns a boolean if the person is of age to enter a bar or not.

// CONDITIONAL / TERNARY OPERATOR
function enterTheBar(age) {
  return (age < 21 ? false : true) // condition ? exprIfTrue : exprIfFalse
}

console.log((enterTheBar(21))) // ==> True
console.log((enterTheBar(19))) // ==> False

// IF/ELSE
function enterTheBar2(age) {
  if (age < 21) {
    return false
  } else {
    return true
  }
}

// console.log((enterTheBar2(21))) // ==> True
// console.log((enterTheBar2(19))) // ==> False