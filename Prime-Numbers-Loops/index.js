/*
A prime number is a positive integer with no divisors besides itself and 1 (it cannot be divided without a reminder by any number besides itself and 1).

Write a function to check whether a given positive integer greater than 1 is prime or not.
*/

// IF STATEMENT
function isPrime(num){
  // check for big giant numbers
  if (num % 2 === 0) {
    return false
  }

  // check if incrementing numbers can
  // make remainder 0
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
  }
  return true
}

console.log(isPrime(3))  // => true
console.log(isPrime(5))  // => true
console.log(isPrime(10))  // => false (divided evenly by 2 and 5)
console.log(isPrime(21))  // => false
console.log(isPrime(49))  // => false
console.log(isPrime(513213245646112313216516131))