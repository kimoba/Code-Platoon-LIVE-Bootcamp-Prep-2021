/*
You're playing a game of Hungry Hungry Hippos with 3 other people. Every round, player 0 will eat 3 pellets, player 1 will eat 4 pellets, player 2 will eat 6 pellets, and player 3 will eat 1 pellet, in that order. The game ends when there are 0 pellets left.

Write a method that takes in the starting number of pellets, and return an array containing which turn the game ends on, and which player eats the last pellet. 

Consider using Array Methods .pop() .push() .shift() .unshift()
*/


// EVEN SHORTER LOOP
let hungryHippos = numPellets => {
  let thisHippoEats = [3, 4, 6, 1]
  let round = 0

  while (numPellets > 0) {
    round += 1  // add round for each iteration thru while loop
    for (let i = 0; i < thisHippoEats.length; i++) {
      numPellets -= thisHippoEats[i]  // go thru each hippo's food (-)
      if (numPellets <= 0) {
        return [round, i]  // no more pellets for the hippos
      }
    }
  }
}

console.log(hungryHippos(1))  // => [1, 0]
console.log(hungryHippos(9))  // => [1, 2]
console.log(hungryHippos(19))  // => [2, 1]



// CLEANED UP CODE FROM BELOW
function hippo(numPellets){
  let thisHippoEats = [3, 4, 6, 1]
  let round = 0
  let answerAsArray = []

  while (numPellets > 0) {
    round += 1
    for (i = 0; i < thisHippoEats.length; i++) {
    numPellets -= thisHippoEats[i]
      if (numPellets <= 0) {
        let winningPlayer = thisHippoEats.indexOf(thisHippoEats[i])
        answerAsArray.push(round, winningPlayer)
        break
      }
    }
  }
  return answerAsArray
}

// console.log(hippo(1))  // => [1, 0]
// console.log(hippo(9))  // => [1, 2]
// console.log(hippo(19))  // => [2, 1]




// UNCLEANED CODE
// 4 total players = index of array
// each player eats a certain amount of pellets
// need to count rounds
function hippoUncleaned(numPellets){
  console.log("# of starting pellets:", numPellets, "\n")
  // create arrays to show player and # of pellets they eat
  let hippoEats = [3, 4, 6, 1]  // array index can be the player
  // create variables to store current round
  let round = 0
  // create array to hold winning player and turn
  let finalArray = []

  while (numPellets > 0) {
    round += 1  // new round
    console.log("current round:", round, "\n")
    for (i = 0; i < hippoEats.length; i++) {
    console.log("player", hippoEats.indexOf(hippoEats[i]), "ate", hippoEats[i], "pellets")
    numPellets -= hippoEats[i]
    console.log("# of pellets left:", numPellets, "\n")
      if (numPellets <= 0) {
        let winningPlayer = hippoEats.indexOf(hippoEats[i])
        console.log("winning player is:", hippoEats.indexOf(hippoEats[i]))
        console.log("winning player", winningPlayer, "& rounds", round)
        finalArray.push(round, winningPlayer)
        break
      }
    }
  }
  return finalArray
}

// console.log(hippoUncleaned(1))  // => [1, 0]
// // console.log(hippoUncleaned(9))  // => [1, 2]
// console.log(hippoUncleaned(19))  // => [2, 1]