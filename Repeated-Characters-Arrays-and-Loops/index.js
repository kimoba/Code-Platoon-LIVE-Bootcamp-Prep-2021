/*

Write a method that takes in an array of characters and a similar-length array of integers.

Return a string consisting of every character repeated the number of times as indicated in the integer array, with each character corresponding to the number in the same position.

*/



/*
STRING REPEAT METHOD
string.prototype.repeat()
syntax: repeat(count)
*/

let repeatedCharsNew = (charArray, numArray) => {
  let answer = ""
  for (let i = 0; i < charArray.length; i++) {
      answer += charArray[i].repeat(numArray[i])
    }
   return answer
}

// console.log(repeatedCharsNew(['a','b','c'], [1,2,3]))  // => 'abbccc'
// console.log(repeatedCharsNew(['h','e','l','o'], [1,1,2,1]))  // => 'hello'




// FOR & WHILE LOOP + COUNTER
let repeatedCharsCounter = (charArray, numArray) => {
  let answer = ""
  for (i = 0; i < numArray.length; i++) {
    let counter = numArray[i]
    // console.log(counter)
      while (counter > 0) {
        answer += charArray[i]
        counter--
        //console.log(answer)
      }
    }
    return answer
  }

// console.log(repeatedCharsCounter(['a','b','c'], [1,2,3]))  // => 'abbccc'
// console.log(repeatedCharsCounter(['h','e','l','o'], [1,1,2,1]))  // => 'hello'




// NESTED LOOP
let repeatedChars = (charArray, numArray) => {
  let answer = ""
  for (let letterIteration = 0; letterIteration < charArray.length; letterIteration++) {
    for (let howManyTimes = 0; howManyTimes < numArray[letterIteration]; howManyTimes++) {
      answer += charArray[letterIteration]
    }
  }
  return answer
}

// console.log(repeatedChars(['a','b','c'], [1,2,3]))  // => 'abbccc'
// console.log(repeatedChars(['h','e','l','o'], [1,1,2,1]))  // => 'hello'




// not cleaned up
function repeatedCharsUncleaned(charArray, numArray){
  // console.log(charArray)
  // console.log(numArray)
  let answer = ""  // answer is an empty string
  // loop through array of chars
  // and within in that loop the array of numbers
  // to grab how many times each char will show
  for (let i = 0; i < charArray.length; i++) {
    console.log("charArray[", i, "] is", charArray[i])
    console.log("numArray[", i, "] is", numArray[i])
    for (let e = 0; e < numArray[i]; e++) {
      answer += charArray[i]
      console.log(answer)
    }
  }
  return answer
}

// repeatedCharsUncleaned(['a','b','c'], [1,2,3])  // => 'abbccc'
// repeatedCharsUncleaned(['h','e','l','o'], [1,1,2,1])  // => 'hello'