/* ********************* SNACK 1 *************************
Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the jury. No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task is to find their total score by comparing them in a single line.

Example:

Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.

The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.
*/

function solve(a, b) {

    // HAPPY CODING!
    //dato che il numero ed il tipo degli elementi sono uguali posso fare un unico ciclo e sommare i punteggi di Alice e Bob
    let scoreA = 0;
    let scoreB = 0;
    let message = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        } else if (a[i] < b[i]) {
            scoreB++;
        }
    }
    //console.log('scoreA = '+ scoreA);
    if (scoreA > scoreB) {
        message = 'Alice made "Kurt" proud!';
    } else if (scoreA < scoreB) {
        message = 'Bob made "Jeff" proud!';
    } else {
        message = 'that looks like a "draw"! Rock on!';
    }
    let result = `${scoreA}, ${scoreB}: ${message}`
    return result;


}

/* ********************* SNACK 2 *************************
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
let s = 'bitcoin take over the world maybe who knows perhaps';
findShort(s);

function findShort(s) {
    //suddivido la stringa in singoli elementi di un array
    let arrayStr = s.split(' ');
    //variabile che conterrà il valore della lunghezza della parola piu corta
    let shortestLength = 0;
    //ciclo per confrontare ogni valore con quello della variabile
    arrayStr.forEach(element => {
        if (shortestLength === 0) {
            shortestLength = element.length;
        } else if (shortestLength > element.length) {
            shortestLength = element.length
        }
    });
    //ritorno il risultato
    return shortestLength;

}


/* ********************* SNACK 3 *************************
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
let str = 'supercalifragilistichespiralidoso';

getCount(str);


function getCount(str) {
    //array di vocali
    vowels = ['a', 'e', 'i', 'o', 'u'];
    numbVowels = 0;
    //ciclo sulla stringa e confronto ogni carattere vedendo se è contenuto nell'array delle vocali;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            numbVowels++;
        }
    }
    console.log(numbVowels);

    //return numbVowels;
}

/* ********************* SNACK 4 *************************
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
console.log('************************* SNACK 4 ***********************');
let a = [66, 101];
let x = 66;
//console.log(check(a, x));
function check(a, x) {
    // your code here
    return a.includes(x);
}

/* ********************* SNACK 5 *************************
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

console.log('************************* SNACK 5 ***********************');
snack5();
function snack5() {
    let a = [1, 2, 1, 1, 3, 2];
    distinct(a);
    function distinct(a) {
        // filtrare l'array togliendo i duplicati
        // ciclo foreach
        let arrayFiltered = [];
        a.forEach(el => {
            //se l'elemento non è incluso, lo metto dentro 
            if (!arrayFiltered.includes(el)) {
                arrayFiltered.push(el);
            }

        });
        console.log(arrayFiltered);


        //return [];
    }
}


/* ********************* SNACK 2 *************************

*/


/* ********************* SNACK 2 *************************

*/