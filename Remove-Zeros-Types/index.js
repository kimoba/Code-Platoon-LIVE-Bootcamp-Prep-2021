function removeZeros(number) {
  // convert number to string so we can replace values
  number = number.toString()
  // console.log(number)  // test variable value
  // for loop - repeat for the length of the string
  for (let i = 0; i < number.length; i++) {
    number = number.replace("0", "")  // replace 0s with empty string
    // console.log(number)  // test variable value
    // console.log(i) // test loop #
  } 
  // return number as an int instead of string
  return parseInt(number)
}

removeZeros(50680019)