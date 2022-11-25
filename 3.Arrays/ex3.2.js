let arr = [1,2,3,4,5];
let length = arr.length;
let sum = 0;
for (let item of arr) {
    sum += item;
}
let average = sum /= length;
console.log(average);