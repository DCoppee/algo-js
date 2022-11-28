/**
 * [Function used to return an array of n numbers between 1 and 10]
 */
//Generating a random number between 1 and 10
let min = 1;
let max = 10;
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//Storing this random number
let randNum = rand10(min, max);
//Storing the number of random numbers to display
let boxNum = Number(prompt("Please enter a number"));
//Creating an empty array
let arr1 = [];
//Generating the elements of the array by a loop
function multiRand(boxNum) {
    for (let i=0; i<boxNum; i++){
        randNum = Math.floor(Math.random() * 10) + 1 ;
        arr1.push(randNum);
    }
    return arr1;
} 
//Displaying the results
console.log(multiRand(boxNum));