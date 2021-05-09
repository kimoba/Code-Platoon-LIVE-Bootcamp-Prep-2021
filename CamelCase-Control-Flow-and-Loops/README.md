# Instructions

There are a couple variable naming conventions in programming. They are camelCase and snake_case. The Javascript language subscribes camelCase. Camel case is a naming convention for variable that contain multiple words.

1. The entire first word in the variable's name is lowercase
2. Every subsequent word's first letter is capitalized
3. There are no spaces or underlines between words. They are combined together.

**Example**

`let firstName = 'Kramer'` (not first_name)

In this challenge you will write a function that takes in a snake_case argument and converts the sentence to the camelCase convention.

**Example**

```js
makeCamelCase("my_name_is_kramer") => myNameIsKramer
makeCamelCase("first_name") => firstName
makeCamelCase("array_of_names") => arrayOfNames
```