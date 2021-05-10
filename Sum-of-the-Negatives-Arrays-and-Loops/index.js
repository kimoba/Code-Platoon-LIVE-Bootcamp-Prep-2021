// Write a method which takes in an array of integers and returns the sum of only the negative integers in the array.


// FOR EACH - shorter
let sumOfNegatives = numArray => {
  let sum = 0
  numArray.forEach(num => { if (num < 0) {sum += num}})
  return sum
}

console.log(sumOfNegatives([3, -1, -9, 2]))  // ==> -10
console.log(sumOfNegatives([4, 5, 1]))  // ==> 0



// FOR OF - looping thru array and finding values < 0, then adding to sum variable
function sumOfNegatives2(numArray) {
  let sum = 0
  for (let value of numArray) {
    if (value < 0) {
      sum += value
    }
  }
  return sum
}

// console.log(sumOfNegatives2([3, -1, -9, 2]))  // ==> -10
// console.log(sumOfNegatives2([4, 5, 1]))  // ==> 0



// FOR LOOP
let sumOfNegatives3 = numArray => {
  let sum = 0
  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) {
      sum += numArray[i]
    }
  }
  return sum
}

// console.log(sumOfNegatives3([3, -1, -9, 2]))  // ==> -10
// console.log(sumOfNegatives3([4, 5, 1]))  // ==> 0