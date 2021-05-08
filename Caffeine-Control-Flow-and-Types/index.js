/*
Every weekday you drink caffeine to get ready for the morning. Monday (m), you need 800mg to wake up from the weekend. Tuesday (t), you only need 600mg. Wednesday (w) and Thursday (r) you only need 400mg. But on Fridays (f) you drink 900mg because you know you'll be staying up late and going out with friends. You prefer buying small energy drinks that contain 150mg of caffeine each.

Write a method that takes in the day as a string and returns the minimum amount of caffeine drinks you'll need to buy.
*/


// OBJECT SOLUTION

function drinks(day) {
  const smallDrink = 150
  const week = {
  /*
    caffeine req
    m 800 mg | t 600 mg | w & r 400 mg | f 900 mg
  */
    "m" : 800,
    "t" : 600,
    "w" : 400,
    "r" : 400,
    "f" : 900
  }
  return Math.ceil(week[day] / smallDrink)
}

console.log(drinks('m')) // => 6
console.log(drinks('r')) // => 3




// IF ELSE VERSION

function drinks2(day){
  /*
    caffeine req
    m 800 mg | t 600 mg | w & r 400 mg | f 900 mg
    user buys small energy drink that contain 150 mg EACH
  */
  const smallDrink = 150 // 150 mg of caffeine each

  if (day === "m") {
    return Math.ceil(800 / smallDrink) // MON
  } else if (day === "t") {
    return Math.ceil(600 / smallDrink)  // TUES
  } else if (day === "w" || "r") {
    return Math.ceil(400 / smallDrink) // WED & THURS
  } else {
    return Math.ceil(900 / smallDrink) // FRI
  }
}

// console.log(drinks2('m')) // => 6
// console.log(drinks2('r')) // => 3