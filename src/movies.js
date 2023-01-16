// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map (movie => movie.director);
}

//bonus part - director list cleaned
const dirArr = getAllDirectors(movies);
const allDirOrdered = dirArr.sort(); //sorted alphab
const orderedDir = allDirOrdered.filter ( function (name) {
    if (allDirOrdered.indexOf(name) === allDirOrdered.lastIndexOf(name)) {return name;}
    else {allDirOrdered.splice(allDirOrdered.indexOf(name),1);}
  }
);

console.log(orderedDir);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter ( function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        }
    }  );
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoreMoviesArray = moviesArray.filter ( movie => movie.score > 0 );


    const allScores = scoreMoviesArray.reduce (function (totalScore, movie) {
        return totalScore + movie.score;
    }        , 0 ) ;

    const avg = allScores / scoreMoviesArray.length;

    if (moviesArray.length >0) {
        return Number(avg.toFixed(2));
    }
    else {return 0;}
    

}

//if (movie.hasOwnProperty("score"))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesArray = moviesArray.filter ( function (movie) {
        return movie.genre.includes("Drama") ;
     } );
 
 
     const allDramaScores = dramaMoviesArray.reduce (function (totalScore, movie) {
         return totalScore + movie.score;
     }        , 0 ) ;
 
    const avgDrama = allDramaScores / dramaMoviesArray.length;
    if (dramaMoviesArray.length > 0) {
        return Number(avgDrama.toFixed(2));
    }
    else {return 0;}
    
 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArrayCopy = moviesArray.map ((x) => x);
    const orderedYear = moviesArrayCopy.sort( function (a,b)  {
        if (a.year > b.year){
          return 1;
        }
       if (a.year < b.year){
         return -1;
       }
       if (a.year == b.year) {
         if (a.title.localeCompare(b.title) == 1){
           return 1;
         }
         else {return -1;}
       }
       
     }   );
     return orderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArrayCopy = moviesArray.map ((x) => x);
    const orderedAlph = moviesArrayCopy.sort( function (a,b)  {
        if (a.title > b.title){
          return 1;
        }
       if (a.title < b.title){
         return -1;
       }

       
       
     }   );
     const twenty = orderedAlph.slice(0,20);
     return twenty.map( movie => movie.title );
     

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    moviesArrayCopy2 = moviesArray.map ((x) => x);
  
    const durationArray2 = moviesArrayCopy2.map ( function (movie) {
      movie.duration = movie.duration.replace('min','');
      movie.duration = movie.duration.replace('h','');
      if (movie.duration.length>1) {
        let time = movie.duration.split(' ');
        movie.duration = 60 * parseInt(time[0]) + parseInt(time[1]);
      }
      else {
        movie.duration *= 60;
      }
      
      return movie;
      }) ;
  
    return durationArray2;
    
} // i actually dont understand why jasmine says duration isnt a number especially sincer i 
//typeof-ed every movie.duration and it is a number :D maybe you could help me understand 

//also jasmine says i'm mutating the original array but i clearly made a copy so... she is 
//messing with me



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
