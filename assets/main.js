//PALINDROMA
//Chiedi all'utente di inserire una parola
var word = prompt("Inserisci una parola");

isPalindrome(word);

//Crea una funzione per capire se la parola inserita è palindroma
function isPalindrome (word) {

    var stringToArray = word.split(''); //fai diventare la stringa un array

    var reverseArray = stringToArray.reverse(); //inverti l'array

    var reverseBackString = reverseArray.join(''); //fai tornare l'array a una stringa

    if(word == reverseBackString) {
        console.log("È palindroma");
        document.getElementById("pal").innerHTML = "La parola " + word + " è palindroma";
    }
    else {
        console.log("Non è palindroma");
        document.getElementById("pal").innerHTML = "La parola " + word + " non è palindroma";

    }
}


