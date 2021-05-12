/*
A prime number is a positive integer with no divisors besides itself and 1 (it cannot be divided without a reminder by any number besides itself and 1).

Write a function to check whether a given positive integer greater than 1 is prime or not.
*/

// CONDITIONAL TERNARY OPERATOR VER
function isPrimeTernary(num) {
  return ((num >= 1) && (num % 2 !== 0) ? true : false)
}

console.log(isPrimeTernary(3))  // => true
console.log(isPrimeTernary(5))  // => true
console.log(isPrimeTernary(10))  // => false (divided evenly by 2 and 5)



// SWITCH STATEMENT
let isPrime = num => {
  switch(num >= 1) {
    case num % 2 === 0:
    return false
    case num % 2 !== 0:
    return true
  }
}

// console.log(isPrime(3))  // => true
// console.log(isPrime(5))  // => true
// console.log(isPrime(10))  // => false (divided evenly by 2 and 5)



// IF ELSE STATEMENT
function isPrime2(num) {
  if ((num >= 1) && (num % 2 !== 0)) {
    return true
  }
  return false
}

// console.log(isPrime2(3))  // => true
// console.log(isPrime2(5))  // => true
// console.log(isPrime2(10))  // => false (divided evenly by 2 and 5)