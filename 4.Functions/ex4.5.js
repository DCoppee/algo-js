/**
 * [Function used to calculate the distance between two points]
 * @param  {number} x1 [first x-coordinate]
 * @param  {number} y1 [first y-coordinate]
 * @param  {number} x2 [second x-coordinate]
 * @param  {number} y2 [second y-coordinate]
 * @return {number}    [square root of the squared coordinates]
 */
let x1 = 3;
let y1 = 5;
let x2 = 1;
let y2 = 1;
function calcDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
console.log(calcDistance(x1, y1, x2, y2));