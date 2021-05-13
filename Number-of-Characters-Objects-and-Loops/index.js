// Write a function that takes in a string of lowercase characters and returns an object containing the count for each letter in the string.

// 1 input = string
// 1 output = object

let countCharacters = (str) => {
  let results = {}
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    // results.str[i] = 1  // for some reason dot notation doesnt work... use bracket notation
    if (results.hasOwnProperty(str[i])) {
      results[str[i]] += 1
    } else {
    results[str[i]] = 1
    }
  }
  return results
}


console.log(countCharacters('bdacdaa')) // -> { b: 1, d: 2, a: 3, c: 1 }
