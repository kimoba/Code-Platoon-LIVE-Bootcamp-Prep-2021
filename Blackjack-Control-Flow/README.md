# Instructions

Given a number representing the sum of the cards in hand, write a method that returns a string that is the "appropriate" response in a game of blackjack i.e if the sum of the cards in hand is less than 15 return "hit", if the sum is between 15 and 21 (inclusive) return "stand" and if the sum is greater than 21 return "bust."

```js
blackjack(5) ==> hit
blackjack(20) ==> stand
blackjack(23) ==> bust
```