function solve(array) {
  function checkIfMovieExists(name, moviesCollection) {
    for (let index = 0; index < moviesCollection.length; index++) {
      if (Object.values(moviesCollection[index]).includes(name)) {
        return index;
      }
    }

    return false;
  }

  function getMovieName(param) {
    let elementToArray = param.split(" ");
    let movieNameArray = elementToArray.slice(1, elementToArray.length);
    return movieNameArray.join(" ");
  }

  function getDirectorName(param) {}

  let movies = [];
  let name;
  let director;
  let date;
  let elementToArray;
  let indexOfKeyWord;

  for (const element of array) {
    if (element.includes("addMovie")) {
      name = getMovieName(element);
      movies.push({ name });
    } else if (element.includes("directedBy")) {
      elementToArray = element.split(" ");
      indexOfKeyWord = elementToArray.indexOf("directedBy");
      name = elementToArray.slice(0, indexOfKeyWord).join(" ");
      const index = checkIfMovieExists(name, movies);

      if (index !== false) {
        director = elementToArray
          .slice(indexOfKeyWord + 1, elementToArray.length)
          .join(" ");

        movies[index].director = director;
      }
    } else if (element.includes("onDate")) {
      elementToArray = element.split(" ");
      indexOfKeyWord = elementToArray.indexOf("onDate");
      name = elementToArray.slice(0, indexOfKeyWord).join(" ");

      index = checkIfMovieExists(name, movies);

      if (index !== false) {
        date = elementToArray
          .slice(indexOfKeyWord + 1, elementToArray.length)
          .join(" ");

        movies[index].date = date;
      }
    }
  }

  const reworkedMovies = movies.filter(
    (movie) =>
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
  );

  const jsonString = reworkedMovies
    .map((movie) => JSON.stringify(movie))
    .join("\n");
  return jsonString;
}

console.log(
  solve([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
  ])
);
