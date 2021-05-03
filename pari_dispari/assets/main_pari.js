//PARI O DISPARI
//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
var choose = prompt("Pari o dispari?");
console.log(choose);
var num = Number(prompt("Scegli un numero intero tra 1 e 5:"));
console.log(num);

//fare una funzione per generare un numero random per il computer
function randomNum(min, max) { 
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

console.log(randomNum(1, 5));


//fare una funzione per sommare i due numeri e stabilire se la somma è pari o dispari
//dichiarare chi ha vinto
var sum = num + randomNum;

function isEven (num, randomNum) {
    var sum = num + randomNum;
    if (sum % 2 == 0 && choose == "pari") {
        return "Vince giocatore";
    } else if (sum % 2 != 0 && choose == "pari"){
        return "Vince pc";
    } else if (sum % 2 != 0 && choose == "dispari") {
        return "Vince giocatore";
    } else if (sum % 2 == 0 && choose == "dispari") {
        return "Vince pc";
    }
         
}

console.log(isEven(num, randomNum));
 


