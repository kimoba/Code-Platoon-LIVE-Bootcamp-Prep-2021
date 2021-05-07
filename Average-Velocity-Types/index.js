// CLEANED CODE
function avgVel(posArray, time) {
  return (posArray[posArray.length - 1] - posArray[0]) / time
}

console.log(avgVel([0, 4, 6], 10))  // 0.6
console.log(avgVel([3, 2, 7], 4))  // 1


// UNCLEANED CODE

function avgVelUncleaned(posArray, time){
  /*
    average velocity = (change in position) / (change in time)
    change in position = last position - first position

    avgVel([0, 4, 6], 10) = 0.6
    avgVel([3, 2, 7], 4) = 1
  */
  let changeInPosition = posArray[posArray.length - 1] - posArray[0]
  // console.log(changeInPosition)
  return changeInPosition / time
}

// avgVelUncleaned([0, 4, 6], 10)
