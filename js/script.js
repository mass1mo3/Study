'use strict'
const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

const personalMovieDB = {
    count:numberOfFilms, 
    movies:{}, 
    actors:{}, 
    genres:[], 
    private: false
}; 

const a = prompt("Один из поседних просмотренных фильмов?", ""), 
    b = prompt("На сколько его оцените?", ""), 
    c = prompt("Один из поседних просмотренных фильмов?", ""), 
    d = prompt("На сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);