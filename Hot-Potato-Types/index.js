/*
HOT POTATO!
5 students - 0 thru 4

start at student 2
each student will give it to the
student on their right
student 2 gives it to student 3, 4 to 0, etc

this function will take the number of number of turns 
and return an int representing the stutden the potato lands on
*/

function potato(numOfTurns){
  // 5 turns 
  //  turn   0    1    2    3    4    5    6    7    8    9   10
  // student 2 => 3 => 4 => 0 => 1 => 2 => 3 => 4 => 0 => 1 => 2
  startingStudent = 2
  totalStudents = 5
  return (startingStudent + numOfTurns) % totalStudents
}

console.log(potato(0)) // => 2
console.log(potato(1)) // => 3
console.log(potato(7)) // => 4