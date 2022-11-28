/**
 * [Function used to display a random number between 1 and 10]
 * @param  {number} min [minimum number]
 * @param  {number} max [maximum number]
 * @return {number}   [random number]
 */
let min = 1;
let max = 10;
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(rand(min, max));