// If the temperature in Chicago drops below -4 degrees fahrenheit, school will be cancelled. Write a method that takes in a temperature in degrees fahrenheit and returns boolean True if school is cancelled or False if it is not.


// CONDITIONAL / TERNARY OPERATOR
function isSchoolCancelled(temp) {
  return (temp < -4 ? true : false)
}

console.log(isSchoolCancelled(-5.3)) // ==> True
console.log(isSchoolCancelled(21.4)) // ==> False



// IF ELSE VERSION

function isSchoolCancelled2(temp) {
  if (temp < -4) {
    return true
  } else {
    return false
  }
}

// console.log(isSchoolCancelled2(-5.3)) // ==> True
// console.log(isSchoolCancelled2(21.4)) // ==> False