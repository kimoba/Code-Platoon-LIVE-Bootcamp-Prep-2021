# Instructions

Write a function that takes in a car object (in the form `{people, miles, spareTiresUsed}`) and a number of miles driven as an integer. Update the car object to include the new amount of miles on the odometer. Additionally, the road is very rocky, so you'll need to use an additional spare tire every 1000 miles. Update the car object to reflect this, too.

**Example**

```js
carTrip({
    people: ["Spiderman", "Batman"],
    miles: 1500,
    spareTiresUsed: 0
}, 5500)

=>

{
    people: ["Spiderman", "Batman"],
    miles: 7000,
    spareTiresUsed: 5
} 
```
