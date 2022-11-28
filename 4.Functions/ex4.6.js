let a = 4;
function factorial(a) {
    if (a == 0) {
        return 1;
    }
    else {
        return a * factorial(a - 1);
    }
}
console.log(factorial(a)); //Outputs 24