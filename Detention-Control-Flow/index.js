/*
All of the students in 5th and 6th grade have detention. You can tell a student is in 6th grade if 6 is the highest number in their student id; if the highest number in their student id is less than 6 they are younger and if it's greater than 6 they are older. The same rule applies for 5th grade students.

Write a method that takes in a student's id as a string of unknown length and returns a boolean true if that student has detention or false if they do not.
*/

// TERNARY VERSION
let haveDetention = id => {
  return (id.split("").filter(highestNum => highestNum >= 5).find(moreThan6 => moreThan6 > 6)) >= 7 ? false : true
}

console.log(haveDetention("1gh3btsduv6"))  // ==> true
console.log(haveDetention("1gh3btsduv67"))  // ==> false



// BASIC VERSION

function haveDetention2(id) {
  idArray = id.split("")  // turn string into an array
  filteredId = idArray.filter(highestNum => highestNum >= 5)  // only grab values 5 or higher
  older = filteredId.find(moreThan6 => moreThan6 > 6)  // find values greater than 6

  if (older >= 6) {
    return false
  } else {
    return true
  }
}

// console.log(haveDetention2("1gh3btsduv6"))  // ==> true
// console.log(haveDetention2("1gh3btsduv67"))  // ==> false

