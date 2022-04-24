const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(arr) {

const directors = arr.map ((movies) => movies.director);  

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?  

const uniqueDirectors = [...new Set(directors)];

return uniqueDirectors

}

console.log (getAllDirectors (movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

const draMaStevenSpielberg = arr.filter (movies => {

if (movies.director === "Steven Spielberg" && movies.genre.includes ("Drama")) {

  return movies;
}

})

return draMaStevenSpielberg.length;

}

console.log (howManyMovies (movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {

  const sum  = movies.map(item => item.score).reduce((prev, curr) => prev + curr, 0);
  const average = sum / movies.length;
    
  return average.toFixed(2);
 
}

console.log (scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const dramasAverage = arr.filter (movies => {

    return movies.genre.includes('Drama'); 
  });
  
  return scoresAverage(dramasAverage);

}

    console.log (dramaMoviesScore)
    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const yearOfMovie = [...movies];
  yearOfMovie.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return yearOfMovie;
}

console.log (orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const titles = arr.map(function(element)
  {
    return element.title
  }) 
  return titles.sort().slice(0,20);
}

console.log (orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  const durationInHours = arr.map ((movies) => movies.duration);
  const durationInMinutes = durationInHours * 60;

  return durationInMinutes;
}




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {

//


}

