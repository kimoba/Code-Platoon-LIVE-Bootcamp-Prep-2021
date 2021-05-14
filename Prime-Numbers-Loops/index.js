// IF STATEMENT
function isPrime(num){
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
  }
  return true
}
// console.log(isPrime(3))  // => true
// console.log(isPrime(5))  // => true
// console.log(isPrime(10))  // => false (divided evenly by 2 and 5)