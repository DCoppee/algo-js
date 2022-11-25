numbers = [1,2,3,4];
numbersCopy = [1,2,3,4];
numbers.push(numbersCopy);
console.log(numbers);

/*Méthode plus propre
numbers = [1,2,3,4];
numbersCopy = [...numbers];
console.log(numbers,numbersCopy);*/