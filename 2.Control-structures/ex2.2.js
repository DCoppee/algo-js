let min = prompt("Enter a minimum number");
let max = prompt("Enter a maximum number");
if (min>max) {
    alert("You are really cute, but you'd better go somewhere else. Please.");
} else {
    let current = prompt("Enter any number");
    if ((current>min) && (current<max)) {
    console.log(current);
    }
}