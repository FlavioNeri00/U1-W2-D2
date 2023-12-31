// /* ESERCIZIO 1
//  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let num1;
let num2;

if (num1 > num2) {
  console.log("Il primo numero è più grande del secondo");
} else {
  console.log("il secondo numero è piu grande del primo");
}

// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let exe2;

if (exe2 != 0) {
  console.log("not equal");
} else {
  console.log("equal");
}

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let divisibile;
if (divisibile % 5 === 0) {
  console.log("Divisibile per 5");
} else {
  console.log("Non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum8 = 17;
let num8 = 9;
if (sum8 === 8 || num8 === 8) {
  console.log("Uno dei due numeri è 8");
} else if (sum8 + num8 === 8) {
  console.log("La somma è uguale a 8");
} else if (sum8 - num8 === 8 || num8 - sum8 === 0) {
  console.log("la sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart;
// let shippingCosts;
// let total = totalShoppingCart + shippingCosts;
// if (totalShoppingCart > 50) {
//   console.log(totalShoppingCart);
// } else {
//   console.log(total);
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart;
let shippingCosts;
let total = totalShoppingCart + shippingCosts;
let blackFriday = (totalShoppingCart * 20) / 100;
if (totalShoppingCart < 50) {
  console.log(total);
} else if (totalShoppingCart > 50) {
  console.log(blackFriday);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const variabile1 = 10;
const variabile2 = 30;
const variabile3 = 20;

if (variabile1 > variabile2 && variabile2 > variabile3) {
  console.log(variabile1 > variabile2 > variabile3);
} else if (variabile1 > variabile3 && variabile3 > variabile2) {
  console.log(variabile1, variabile3, variabile2);
} else if (variabile2 > variabile1 && variabile1 > variabile3) {
  console.log(variabile2, variabile1, variabile3);
} else if (variabile2 > variabile3 && variabile3 > variabile1) {
  console.log(variabile2, variabile3, variabile1);
} else if (variabile3 > variabile2 && variabile2 > variabile1) {
  console.log(variabile3, variabile2, variabile1);
} else if (variabile3 > variabile1 && variabile1 > variabile2) {
  console.log(variabile3, variabile1, variabile2);
} else {
  console.log("non riuscito");
}

// console: 30 20 10

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberOrLetter = 5;

if (typeof numberOrLetter === "number") {
  console.log("è un numero");
} else {
  console.log("non è numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariOdispari = 7;

if (pariOdispari % 2 === 0) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newArray = [];
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push(8);
newArray.push(9);
newArray.push(10);
console.log(newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newArrayReplacement = 100;
newArray[newArray.length - 1] = newArrayReplacement;
console.log(newArray);
