// Write a recursive function that takes in a string "word" and determines if the string is a palindrome. If it is a palindrome return the boolean true; if it is not a palindrome return the boolean false.

// For reference, a palindrome is a word that is spelled the same backwards and forwards.



function palindrome(word) {
  // BASE CASE
  // if we get down to 1 or no chars it's a palindrome
  if (word.length === 0 || word.length === 1) {
    return true
  } else {
    // RECURSIVE CASE
    //             "e"    ===            "e"
    return word.slice(-1) === word.slice(0, 1) && palindrome(word.slice(1, -1))  // new function w/o first and last chars
  }
}

console.log(palindrome("racecar"))  // ==> true
console.log(palindrome("conifer"))  // ==> false

// let example = "example"
// console.log(example.slice(-1))  // "e"
// console.log(example.slice(0, 1))  // "e"
// console.log(example.slice(1, -1))  // "xampl"

/*
"racecar" 
"aceca"
"cec"
"e"
*/ 

