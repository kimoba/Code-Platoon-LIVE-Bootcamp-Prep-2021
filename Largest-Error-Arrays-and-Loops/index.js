// Write a function that takes in a list of incorrect numbers and a correct number. Return the incorrect number farthest away from the correct number.

let maxError = (wrongNums, correctNum) => {
  let furthestWrongNum = Math.abs(correctNum - wrongNums[0])
  for (let i = 1; i < wrongNums.length; i++) {
    let value = Math.abs(correctNum - wrongNums[i])
    furthestWrongNum = (value > furthestWrongNum ? wrongNums[i] : furthestWrongNum )
  }
  return furthestWrongNum
}

console.log(maxError([3, 6, -10,], 0))  // => -10
console.log(maxError([3, 6, -10], -9))  // => 6