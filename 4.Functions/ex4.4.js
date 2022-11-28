//Creating an array
let inputAr = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan Bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
//Creating a random number of learners
let n = Math.floor(Math.random() * 23);
//Creating a function to pick n learners in an array
function pickLearner(inputAr,n) {
//Shuffling the elements of the array before picking them
    const shuffledLearners = [...inputAr].sort(() => 0.5 - Math.random ());
//Selecting random elements of the array
    return shuffledLearners.slice(1, n);
}
//Displaying the result
console.log(pickLearner(inputAr,n));