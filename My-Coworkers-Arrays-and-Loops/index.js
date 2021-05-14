/*
Your given input is a nested array of colleagues. Within the nested array there are your colleagues' titles and a characteristic of them.

Write a function that console.log the colleague's name, title and their characteristic and then returns true
*/

// input: 1 object
// output: console.log strings

let myColleagues = (colleagues) => {
  //console.log(colleagues)
  for (i = 0; i < colleagues.length; i++) {
    // console.log(colleagues[i])
    let name = colleagues[i][0]
    let position = colleagues[i][1][0]
    let personality = colleagues[i][1][1]
    //console.log(name)
    console.log(`${name} is the ${position} and is ${personality}.`)
  }
  return true
}

let colleagueData = [
  ['Stacey', ['IT person', 'super smart']],
  ['Jim', ['sales person', 'outgoing']],
  ['Jenny', ['manager', 'very empethetic']],
  ['Cory', ['software engineer', 'very funny']]
  ]

myColleagues(colleagueData)
// Stacey is the IT person and is super smart.
// Jim is the sales person and is outgoing.
// Jenny is the manager and is very empathetic.
// Cory is the software engineer and is very funny.
//-> true