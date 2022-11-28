/**
 * [Function used to calculate the surface of a rectangle]
 * @param  {number} w [width of the rectangle]
 * @param  {number} h [height of the rectangle]
 * @return {number}   [product of the parameters]
 */
let width = prompt("What's the width of the rectangle?");
let height = prompt("What's the height of the rectangle?");
function calcSurface (w, h) {
    return w*h;
}
console.log(calcSurface(width, height));