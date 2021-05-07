/*
Write a function that takes in a sentence and an illegal word, and returns a boolean indicating whether or not the sentence contains the illegal word. Capitalization should not matter.

Example

illegalWord('Hello there', 'fudge') => false
illegalWord("But I didn't say fudge", 'fudge') => true
illegalWord("But I didn't say fudge", 'Fudge') => true
*/

function illegalWord(sentence, word) {
  let sentenceArray = sentence.toLowerCase().split(" ")
  console.log(sentenceArray)

  // we want to through the array (for loop) and
  // see if each value/index STRICTLY matches the variable (word in lowercase)
  // if it matches, return true, else return false

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] === word.toLowerCase) {
      return true
    }
  }
    return false
}


console.log(illegalWord('Hello there', 'fudge')) // => false
console.log(illegalWord("But I didn't say fudge", 'fudge')) // => true
console.log(illegalWord("But I didn't say fudge", 'Fudge')) // => true


// EASIER METHOD WAY

// function illegalWord(sentence, word) {
//   return sentence.toLowerCase().includes(word.toLowerCase())
// }

// illegalWord('Hello there', 'fudge') // => false
// illegalWord("But I didn't say fudge", 'Fudge') // => true

