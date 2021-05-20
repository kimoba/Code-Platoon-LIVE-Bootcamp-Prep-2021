/*
row 1:     *
row 2:    ***
row 3:   *****
ROW 4:  *******

so the number of blocks for a row n equals 2 * n - 1.
*/

function pyramid(height){
  // BASE CASE
  if (height === 1) {
    return 1
  } else {
    // RECURSIVE CASE
    // 2 * n - 1
    return (2 * height - 1) + pyramid(height - 1)
  }
}

pyramid(3)  // => 9

/*
3 ROWS
  *
 ***
*****
*/
