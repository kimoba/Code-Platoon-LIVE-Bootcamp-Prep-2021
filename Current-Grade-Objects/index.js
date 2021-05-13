/*

Write a method that takes in a student object with attributes GPA as a number and grade level as a number as well as an integer representing the change in their GPA. This method should update the student's GPA to include the change and increase their grade level by one year and should return the updated student object.

*/

// input: 2 - student as an object, improvement as an integer
// output: one student object

function currentGrade(student, improvement) {
  // console.log(student, improvement)
  // grade increases by 1
  // multiply gpa by improvement
  student.GPA += improvement
  student.grade += 1
  return student
}

console.log(currentGrade({ grade: 10, GPA: 2.5}, 0.3))
// ==> { grade: 11, GPA: 2.8 }
 
console.log(currentGrade({ grade: 6, GPA: 4.0}, -0.6))
// ==> { grade: 7, GPA: 3.4 }