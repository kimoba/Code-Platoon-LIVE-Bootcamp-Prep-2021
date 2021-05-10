/*

Write a method that takes in a minimum and maximum integer, and return an array of all the integers in between in ascending order.

Consider using Array Methods .pop() .push() .shift() .unshift()

*/


// .push() to an array
let rangeGen = (min, max) => {
  let newArray = []
  for (let i = (min + 1); i < max; i++) {
    newArray.push(i)
  }
  return newArray
}

console.log(rangeGen(3, 7))  // => [4, 5, 6]
console.log(rangeGen(-4, 1))  // => [-3, -2, -1, 0]