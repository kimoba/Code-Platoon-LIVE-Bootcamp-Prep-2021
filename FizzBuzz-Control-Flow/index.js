/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates. The text of the programming assignment is follows something similar to this:

Write a program that prints an object with a number of keys. The key is the number and the value is either the number, "Fizz", "Buzz", or "FizzBuzz".

But for multiples of three assign the key's value to equal “Fizz” instead of the number and for the multiples of five assign the key's value to equal “Buzz”. For numbers which are multiples of both three and five assign the key's value to equal “FizzBuzz”, otherwise assign the key's value to equal the number.

*/

const fizzBuzz = (num) => {
  let fizzBuzzResults = {}  // create empty object
  for (let i = 1; i <= num; i++) { // start at 0 loop until i = num aka 100
    if (i % 3 == 0 && i % 5 == 0) {
    fizzBuzzResults[i] = "FizzBuzz"  // add key [i]. if multiple of 3 and 5 value is FizzBuzz
    } else if (i % 3 == 0) {
    fizzBuzzResults[i] = "Fizz"  // add key [i]. if multiple of 3 value is Fizz
    } else if (i % 5 == 0) {
    fizzBuzzResults[i] = "Buzz"  // add key [i]. if multiple of 5 value is Buzz
    } else {
    fizzBuzzResults[i] = i  // add key [i]. if not a multipe of 3 or 5 value is the number
    }
  }
  return fizzBuzzResults
}

fizzBuzz(100)


// FUNCTION IN FUNCTION VER

const fizzBuzz2 = (num) => {
  let fizzBuzzResults = {}  // create empty object
  for (i = 1; i <= num; i++) { // start at 0 loop until i = num aka 100
  fizzBuzzResults[i] = findValue(i)  // add new obj entry
  ///console.log(fizzBuzzResults)
  }
  return fizzBuzzResults
}

let findValue = (someNum) => {
  if (someNum % 3 == 0 && someNum % 5 == 0) {
    return "FizzBuzz"  // if multiple of 3 and 5 return FizzBuzz
  } else if (someNum % 3 == 0) {
    return "Fizz"  // if multiple of 3 return Fizz
  } else if (someNum % 5 == 0) {
    return "Buzz"  // if multiple of 5 return Buzz
  } else {
    return someNum  // if not a multipe of 3 or 5 return the number
  }
}

// fizzBuzz2(100)
 
//=> 
// { 1: 1,
//  2: 2,
//  3: 'Fizz',
//  4: 4,
//  5: 'Buzz',
//  6: 'Fizz',
//  7: 7,
//  8: 8,
//  9: 'Fizz',
//  10: 'Buzz',
//  11: 11,
//  12: 'Fizz',
//  13: 13,
//  14: 14,
//  15: 'FizzBuzz',
//  16: 16,
//  17: 17,
//  18: 'Fizz',
//  19: 19,
//  20: 'Buzz',
//  21: 'Fizz',
//  22: 22,
//  23: 23,
//  24: 'Fizz',
//  25: 'Buzz',
//  26: 26,
//  27: 'Fizz',
//  28: 28,
//  29: 29,
//  30: 'FizzBuzz',
//  31: 31,
//  32: 32,
//  33: 'Fizz',
//  34: 34,
//  35: 'Buzz',
//  36: 'Fizz',
//  37: 37,
//  38: 38,
//  39: 'Fizz',
//  40: 'Buzz',
//  41: 41,
//  42: 'Fizz',
//  43: 43,
//  44: 44,
//  45: 'FizzBuzz',
//  46: 46,
//  47: 47,
//  48: 'Fizz',
//  49: 49,
//  50: 'Buzz',
//  51: 'Fizz',
//  52: 52,
//  53: 53,
//  54: 'Fizz',
//  55: 'Buzz',
//  56: 56,
//  57: 'Fizz',
//  58: 58,
//  59: 59,
//  60: 'FizzBuzz',
//  61: 61,
//  62: 62,
//  63: 'Fizz',
//  64: 64,
//  65: 'Buzz',
//  66: 'Fizz',
//  67: 67,
//  68: 68,
//  69: 'Fizz',
//  70: 'Buzz',
//  71: 71,
//  72: 'Fizz',
//  73: 73,
//  74: 74,
//  75: 'FizzBuzz',
//  76: 76,
//  77: 77,
//  78: 'Fizz',
//  79: 79,
//  80: 'Buzz',
//  81: 'Fizz',
//  82: 82,
//  83: 83,
//  84: 'Fizz',
//  85: 'Buzz',
//  86: 86,
//  87: 'Fizz',
//  88: 88,
//  89: 89,
//  90: 'FizzBuzz',
//  91: 91,
//  92: 92,
//  93: 'Fizz',
//  94: 94,
//  95: 'Buzz',
//  96: 'Fizz',
//  97: 97,
//  98: 98,
//  99: 'Fizz',
//  100: 'Buzz'
//  }