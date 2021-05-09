# Instructions

Write a method that takes in a river velocity as an integer and a boat type as a string. Rowboats can only navigate in waters under 3 mph, otherwise, they'd crash. Similarly, sailboats can navigate under 7 mph and ships can navigate under 15 mph. 

Return whether the input boat can navigate, given the river velocity.

**Examples**

```js
canNav(2, "rowboat") => true
canNav(3, "rowboat") => false
canNav(3, "sailboat") => true
canNav(3, "SaIlboAt") => true
```
