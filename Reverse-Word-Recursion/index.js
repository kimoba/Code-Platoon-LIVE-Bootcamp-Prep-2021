// Using recursion and without creating any additional variables, create a function that returns the reverse of an inputted string.

function reverseWord(inOrderString){
  // BASE CASE
  // console.log(inOrderString.substr(1))
  // console.log(inOrderString.charAt(0))
  if (inOrderString === "") {
    return ""
  } else {
    // RECURSIVE CASE
    return reverseWord(inOrderString.substr(1)) + inOrderString.charAt(0)
  }
}

console.log(reverseWord("Hello"))  // => "olleH"
console.log(reverseWord("This is mine."))  // => ".enim si sihT"


// ello + H
// llo + e
// lo + l
// o + l
// "" + o


// .substr()
// substr(start)
// substr(start, length)

// const str = 'Mozilla';

// console.log(str.substr(1, 2));
// // expected output: "oz"

// console.log(str.substr(2));
// // expected output: "zilla"


// .charAt()
// charAt(index)

//let str = 'Hello'
//console.log(str.substr(4) + str.substr(3) + str.substr(2) )
// str.length - 1


