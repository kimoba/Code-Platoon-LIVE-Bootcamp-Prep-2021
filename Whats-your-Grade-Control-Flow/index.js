// Write a function that takes in a number parameter represented by a GPA and returns the corresponding grade.

function myGradeIs(gpa) {
  if (gpa >= 4) {
    return "A"
  } else if (gpa >= 3) {
    return "B"
  } else if (gpa >= 2) {
    return "C"
  } else if (gpa >= 1) {
    return "D"
  } else {
    return "F"
  }
}

console.log(myGradeIs(4.5)) // ==> 'A'
console.log(myGradeIs(3.5)) // ==> 'B'
console.log(myGradeIs(2.2)) // ==> 'C'
console.log(myGradeIs(1.7)) // ==> 'D'
console.log(myGradeIs(0.9)) // ==> 'F'