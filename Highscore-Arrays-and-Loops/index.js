// Write a method that takes in an integer array of student test scores and returns only the highest score.

// Math.max
function highScore(studentScores) {
  return Math.max(...studentScores)
}

console.log(highScore([89,76,56,92,66])) //=> 92
console.log(highScore([67,97,96,92,90])) //=> 97



// For Of Loop w TERNARY
let highScore2 = studentScores => {
  topScore = 0
  for (let value of studentScores) {
    topScore = (value > topScore ? value : topScore)
  }
  return topScore
}

// console.log(highScore2([89,76,56,92,66])) //=> 92
// console.log(highScore2([67,97,96,92,90])) //=> 97



// For Of Loop
let highScore3 = studentScores => {
  topScore = 0
  for (let value of studentScores) {
    // console.log(value)
    if (value > topScore) {
      topScore = value
    }
  }
  return topScore
}

// console.log(highScore3([89,76,56,92,66])) //=> 92
// console.log(highScore3([67,97,96,92,90])) //=> 97