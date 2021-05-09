/*

Write a function that takes in a number that represents a social security number and return the last four digit as a string of the social security number.
 Look into using the following built-in methods .toString() .split() .slice() .join()

*/

// METHOD 1
// toString & slice
let lastFour = socSec => {
  socSec = socSec.toString()
  return socSec.slice(socSec.length - 4)
}

console.log(lastFour(546800156)) //-> 0156
console.log(lastFour(657698357)) //-> 8357
console.log(lastFour(855790769)) //-> 0769


// METHOD 2
// toString + split + slice + join
let lastFour2 = socSec => {
  socSec = socSec.toString()
  length = socSec.length

  return socSec.split("").slice(length - 4).join("")
}

// console.log(lastFour2(546800156)) //-> 0156
// console.log(lastFour2(657698357)) //-> 8357
// console.log(lastFour2(855790769)) //-> 0769


// METHOD 3
// toString + new string + for loop + split + reverse + join
let lastFour3 = (socSec) => {
  socSec = socSec.toString()
  let lastFourSSN = ""
  // console.log(socSec.length - 1)
  // console.log(socSec[0])
  for (let i = (socSec.length - 1); i > (socSec.length - 5); i--) {
    // console.log(socSec[i])
    lastFourSSN = lastFourSSN + socSec[i]
  }
  return lastFourSSN.split("").reverse().join("")
}

// console.log(lastFour3(546800156)) //-> 0156
// console.log(lastFour3(657698357)) //-> 8357
// console.log(lastFour3(855790769)) //-> 0769