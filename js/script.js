// 'use strict'
// const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

// const personalMovieDB = {
//     count:numberOfFilms, 
//     movies:{}, 
//     actors:{}, 
//     genres:[], 
//     private: false
// }; 

// const a = prompt("Один из поседних просмотренных фильмов?", ""), 
//     b = prompt("На сколько его оцените?", ""), 
//     c = prompt("Один из поседних просмотренных фильмов?", ""), 
//     d = prompt("На сколько его оцените?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// let result = ""; 
// let length = 20; 
// for (i = 1; i < length; i++) {
//     for (j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result); 


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`); {
//             for (let k = 0; k < 5; k++) {
                
//                 console.log(`Third level: ${k}`); 
//                 }
//         }
// }
// }
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)