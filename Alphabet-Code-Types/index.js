function alphabetCode(letter) {
  // make an array with all the alphabet numbers
  let alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"
    ]
  // take user input and make sure it's uppercase
  // then find the index from the array
  letter = alphabet.indexOf(letter.toUpperCase())
  return letter + 1  // add 1 to the index value cause we don't want to use 0
}

console.log(alphabetCode("A"))
console.log(alphabetCode("B"))
alphabetCode("z")