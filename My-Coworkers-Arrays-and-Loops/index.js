
let colleagueData = [
  ['Stacey', ['IT person', 'super smart']],
  ['Jim', ['sales person', 'outgoing']],
  ['Jenny', ['manager', 'very empethetic']],
  ['Cory', ['software engineer', 'very funny']]
  ]

// for each loop
let myColleagues2 = (colleagues) => {
  colleagues.forEach(person => {
    // console.log("the value of 'person' is", person)
    console.log(`${person[0]} is the ${person[1][0]} person and is ${person[1][1]}`)
  })
  return true
}

myColleagues2(colleagueData)



// for loop
let myColleagues = (colleagues) => {
  for (i = 0; i < colleagues.length; i++) {
    console.log(`${colleagues[i][0]} is the ${colleagues[i][1][0]} person and is ${colleagues[i][1][1]}`)
  }
  return true
}

//myColleagues(colleagueData)
// Stacey is the IT person and is super smart.
// Jim is the sales person and is outgoing.
// Jenny is the manager and is very empathetic.
// Cory is the software engineer and is very funny.
//-> true