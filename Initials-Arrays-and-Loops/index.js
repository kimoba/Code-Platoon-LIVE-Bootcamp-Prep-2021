// Write a method that takes in a string of your full name and return your initials as a string in all uppercase.

// for loop
function nameInitials(fullName) {
  let fullNameArray = fullName.split(" ")
  let initials = ""
  for (let i = 0; i < fullNameArray.length; i++) {
    initials += fullNameArray[i][0].toUpperCase()
  }
  return initials
}

console.log(nameInitials('Michael Jordon'))  // => 'MJ'
console.log(nameInitials('elon musk'))  // => 'EL'
console.log(nameInitials('Michael Gary scott'))  // => 'MGS'




// for loop + charAt
function nameInitials2(fullName) {
  let fullNameArray = fullName.split(" ")
  let initials = ""
  for (let i = 0; i < fullNameArray.length; i++) {
    initials += fullNameArray[i].charAt(0).toUpperCase()
  }
  return initials
}


// console.log(nameInitials2('Michael Jordon'))  // => 'MJ'
// console.log(nameInitials2('elon musk'))  // => 'EL'
// console.log(nameInitials2('Michael Gary scott'))  // => 'MGS'