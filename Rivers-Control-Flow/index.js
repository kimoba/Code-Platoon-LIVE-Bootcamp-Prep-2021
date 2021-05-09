/*

Write a method that takes in a river velocity as an integer and a boat type as a string. * * rowboats can only navigate in waters under 3 mph, otherwise, they'd crash
* sailboats can navigate under 7 mph
* ships can navigate under 15 mph.

Return whether the input boat can navigate, given the river velocity.

*/


// CASE STATEMENTS VERSION W TERNARY
let canNav = (velocity, boatType) => {
  switch(boatType.toLowerCase()) {
    case "rowboat":
    return (velocity < 3 ? true : false)
    case "sailboat":
    return (velocity < 7 ? true : false)
    case "ship":
    return (velocity < 15 ? true : false)
  }
}

// console.log(canNav(2, "rowboat")) // => true
// console.log(canNav(3, "rowboat")) // => false
// console.log(canNav(3, "sailboat"))  // => true
// console.log(canNav(3, "SaIlboAt"))  // => true
// console.log(canNav(20, "ship"))  // => false



// IF ELSE SHORTER
let canNav3 = (velocity, boatType) => {
  boatType = boatType.toLowerCase()
  if (boatType == "rowboat" && velocity < 3) {
    return true
  }
  else if (boatType == "sailboat" && velocity < 7) {
    return true
  }
  else if (boatType == "ship" && velocity < 15) {
    return true
  }
  else return false
}

// console.log(canNav3(2, "rowboat")) // => true
// console.log(canNav3(3, "rowboat")) // => false
// console.log(canNav3(3, "sailboat"))  // => true
// console.log(canNav3(3, "SaIlboAt"))  // => true
// console.log(canNav3(20, "ship"))  // => false



// IF ELSE NESTED
function canNav2(velocity, boatType){
  boatType = boatType.toLowerCase()
  console.log(boatType)
  if (boatType === "rowboat") {
    if (velocity < 3) {
      return true
    } else {
      return false
    }
  } else if (boatType == "sailboat") {
    if (velocity < 7) {
      return true
    } else {
      return false
    }
  } else if (boatType == "ship") {
    if (velocity < 15) {
      return true
    } else {
      return false
    }
  }
}

// console.log(canNav(2, "rowboat")) // => true
// console.log(canNav(3, "rowboat")) // => false
// console.log(canNav(3, "sailboat"))  // => true
// console.log(canNav(3, "SaIlboAt"))  // => true