/*

Given a number representing the sum of the cards in hand, write a method that returns a string that is the "appropriate" response in a game of blackjack

i.e if the sum of the cards in hand is less than 15 return "hit"
if the sum is between 15 and 21 (inclusive) return "stand"
if the sum is greater than 21 return "bust."

*/

// NESTING TERNARY VERSION
const blackjack = sum => {
// sum is less than 21? "bust | ELIF sum is btwn 15 & 21? "stand" | ELSE "hit"  
  return (sum > 21 ? "bust" : (sum >= 15 && sum <= 21) ? "stand" : "hit")
}

console.log(blackjack(5)) // ==> hit
console.log(blackjack(20)) // ==> stand
console.log(blackjack(23)) // ==> bust


// IF ELSE VERSION
function blackjack2(sum) {
  if (sum > 21) {
    return "bust"  // greater than 21
  } else if (sum >= 15 && sum <= 21) {
    return "stand"  // between 15 and 21
  } else {
    return "hit"  // less than 15
  }
}

console.log(blackjack2(5)) // ==> hit
console.log(blackjack2(20)) // ==> stand
console.log(blackjack2(23)) // ==> bust

