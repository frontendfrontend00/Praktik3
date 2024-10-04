"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви переглянули?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви переглянули?");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYoutGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваший улюблений жанр під номером ${i}`
    );
  }
}
writeYoutGenres();

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Останній переглянутий фільм?"),
      b = prompt("Його оцінка?");
    personalMovieDB.movies[a] = b;

    if (
      a != null &&
      b != null &&
      a != "" &&
      b != "" &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
      console.log("Ok");
    } else {
      console.log("Error");
      i--;
    }
  }
}
rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Мало фільмів");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Кіноман");
  } else {
    console.log("Помилка");
  }
}
detectPersonalLevel();
