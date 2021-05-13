// input = 1 array of strings
// output = 1 float integer that represents a cumulative gpa

const myGPA = (arrOfGrades) => {
  let grades = {
    "A+": 4.33,
    "A": 4,
    "A-": 3.67,
    "B+": 3.33,
    "B": 3.00,
    "B-": 2.67,
    "C+": 2.33,
    "C": 2.00,
    "C-": 1.67,
    "D+": 1.33,
    "D": 1.00,
    "D-": 0.67,
    "F": 0
  }

  // console.log(Object.keys(grades)) 
  // console.log(Object.values(grades)) 
  // console.log(grades.hasOwnProperty("A"))  // returns boolean value
  // console.log(Object.entries(grades)) // show all key value pairs

  // console.log(grades["A+"])
  let gpa = 0

  for(let i = 0; i < arrOfGrades.length; i++) {
    // console.log(arrOfGrades[i])  // test array values
    // console.log(grades[arrOfGrades[i]])  // see values in dict with "array keys"
    gpa += grades[arrOfGrades[i]]
    // console.log(gpa)
  }
  return gpa / arrOfGrades.length  // gpa is avg of grades
}

console.log(myGPA(['A+','C+','B+','A-','C']))  // ==> 3.132
console.log(myGPA(['B-','C+','B+','C-','A+']))  // ==> 2.866