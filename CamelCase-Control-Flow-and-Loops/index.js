/*

There are a couple variable naming conventions in programming. They are camelCase and snake_case. The Javascript language subscribes camelCase. Camel case is a naming convention for variable that contain multiple words.

1. The entire first word in the variable's name is lowercase
2. Every subsequent word's first letter is capitalized
3. There are no spaces or underlines between words. They are combined together. 

*/



// array version

let makeCamelCase = (input) => {
  let array = input.split("_")
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
  }
  return array.join("")
}

console.log(makeCamelCase("my_name_is_kramer"))  // => myNameIsKramer
console.log(makeCamelCase("first_name"))  // => firstName
console.log(makeCamelCase("array_of_names"))  // => arrayOfNames




// string version

let makeCamelCase = (input) => {
  let camelCaseResult = ""
  for (let i = 0; i < input.length; i++){
    // console.log(input[i])
    if (input[i] === "_") {
      let upperCaseLetter = input[i + 1].toUpperCase()
      camelCaseResult += upperCaseLetter
      // console.log(input[i])
      i++
      // console.log(input[i])
    } else {
      // console.log(input[i])
      camelCaseResult += input[i]
    }
  }
  return camelCaseResult
}

console.log(makeCamelCase("my_name_is_kramer"))  // => myNameIsKramer
console.log(makeCamelCase("first_name"))  // => firstName
console.log(makeCamelCase("array_of_names") ) // => arrayOfNames