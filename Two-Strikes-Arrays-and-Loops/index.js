/*

Write a method that takes in a string array of license plate numbers. The method should return a string array of any plate numbers that appeared at least twice. If none of the plate numbers appeared more than once, the method should return an empty array.

*/

function twoStrikes(plates) {
  // console.log(plates)
  let multiplePlatesFound = []  // create new empty array

  while (plates.length > 0) {
    let valueToCheck = plates.shift()  // first value is removed and returned via variable
    // console.log(valueToCheck)
    for (let i = 0; i < plates.length; i++) {
      // if value to check equals the plate in the iteration AND multiplePlatesFound DOES NOT include the valueToCheck
      if (valueToCheck === plates[i] && !multiplePlatesFound.includes(valueToCheck)) {
        multiplePlatesFound.push(valueToCheck)  // push to array if conditions are met
      }
    }
  }
  return multiplePlatesFound
}

console.log(twoStrikes(['1AS5GB7', '345B317', '5A22845', 'AU73671', '345B317', '345B317']))  // ==> ['345B317']
console.log(twoStrikes(['1AS5GB7', '345B317', '5A22845', 'AU73671']))  // ==> []