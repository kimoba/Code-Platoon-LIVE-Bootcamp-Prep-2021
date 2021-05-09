/*

In order to be elected president in the United States you need to meet certain qualifications such as being at least 35 years old and being a natural-born citizen of the U.S.

Write a method that takes in the last name, the age, and the country of origin for a presidential candidate (in that order) and returns a boolean true if that candidate has the potential to be president or false if they do not.

*/

// CONDITIONAL / TERNARY

let eligibleForPrez = (name, age, country) => {
  return ((age >= 35 && country.toLowerCase() === "united states") ? true : false)
}

console.log(eligibleForPrez("Clinton", 65, "United States"))  // ==> true
console.log(eligibleForPrez("O'Shaughnessy", 20, "Ireland")) // ==> false



// IF ELSE STATEMENT

function eligibleForPrez2(name, age, country) {
  if (age >= 35 && country.toLowerCase() === "united states") {
  return true
  } else return false
}

// console.log(eligibleForPrez2("Clinton", 65, "United States"))  // ==> true
// console.log(eligibleForPrez2("O'Shaughnessy", 20, "Ireland")) // ==> false