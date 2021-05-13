/*

Write a function that takes in two arguments, an array of names and a number (negative or positive). The number represents how many positions the names in the array should move.

The expected output is the arrOfNames with the names in their new positions

*/

// IF ELSE

let arrOfNames = ['kyle', 'stacy', 'tina', 'kenisha', 'greg']

let backOfTheLine = (arrOfName, numOfPositions) => {
  if (numOfPositions > 0) {
    for (let i = 0; i < numOfPositions; i++) {
      let nameToMove = arrOfName.pop()
      arrOfName.unshift(nameToMove)
    }
  } else if (numOfPositions < 0) {
    for (let i = 0; i > numOfPositions; i--) {
      let nameToMove = arrOfName.shift()
      arrOfName.push(nameToMove)
    }
  }
  return arrOfNames
}

// test one at a time since it's a global variable, or create a clean new variable for each test

console.log(backOfTheLine(arrOfNames, 2)) //-> ['kenisha', 'greg', 'kyle', 'stacy', 'tina']
console.log(backOfTheLine(arrOfNames, -1)) //-> ['stacy', 'tina', 'kenisha', 'greg', 'kyle']






// IF WHILE

let backOfTheLine2 = (arrOfNames, numOfPositions) => {
  let counter = numOfPositions
  if (numOfPositions > 0) {
    while (counter > 0) {
      let poppedName = arrOfNames.pop()  // remove last entry and save in variable
      arrOfNames.unshift(poppedName)  // move last entry to front
      // console.log(arrOfNames)
      counter--
      }
    } else {
    while (counter < 0) {
      // console.log(counter)
      let poppedName = arrOfNames.shift()  // remove first entry and save in variable
      arrOfNames.push(poppedName)  // move first entry to end
      // console.log(arrOfNames)
      counter++
      }
  }
  return arrOfNames
}

// console.log(backOfTheLine2(arrOfNames, 2)) //-> ['kenisha', 'greg', 'kyle', 'stacy', 'tina']
// console.log(backOfTheLine2(arrOfNames, -1)) //-> ['stacy', 'tina', 'kenisha', 'greg', 'kyle']