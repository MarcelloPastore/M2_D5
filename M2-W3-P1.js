/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1, l2) {
    l1 = 10; l2 = 20;
    let area = l1 * l2;
    return area;
}

console.log(area());

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(val1, val2) {
    let somma= 0;
    val1 = 9; val2 = 10;

    if (val1 === val2) {
        somma = (val1 + val2) * 3;
    } else {
        somma = (val1 + val2);
    }
    return somma;
}

console.log(crazySum());

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(val1, val2) {
    let differenza = 0;
    val1 = 10;
    val2 = 19;
    if ((val1 - val2) > val2) {
        differenza = (val1 - val2) * 3;
    } else {
        differenza = val1 - val2;
    }
    return differenza;
}

console.log(crazyDiff());

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num) {
    num = 200;
    if ((num > 20 && num <= 100)||(num === 400)) {
        return true;
    }else {
        return false;
    }
}

console.log(boundary());

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(string) {
    let codeString = "code";

    if (string === codeString) return string;
    else {
        string = string + " " + codeString;
    }
    return string;
}

console.log(codify("is time to"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(num) {
    if (num > 0) {
        if (num % 3 == 0) return true
        else if (num % 7 == 0) return true
        else return false
    } else return "Il numero inserito è <= 0";
}
console.log(check3and7(14)); */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function upperFirst(str) {
    str = str.split(' ');
    for (i = 0 ; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }return str.join(' ');
}
console.log(upperFirst('giuro che sono una brava persona')); */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    str = str.slice(1,-1);
    return str;
}
console.log(cutString("Stringa di epicode"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function giveMeRandom(n) {
    for (i=0; i<n; i++) console.log(Math.floor(Math.random() * 11));
}
giveMeRandom(7); */
