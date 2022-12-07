import { SHORT_DURATION } from "./constants.js";

const movieFiltration = (movies, keyWords, isCheckBoxActive) => {
  let filteredMovies = movies;

  if (keyWords !== "") {
    filteredMovies = filteredMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(keyWords.toLowerCase())
    );
  }

  if (isCheckBoxActive) {
    filteredMovies = filteredMovies.filter(
      (item) => item.duration <= SHORT_DURATION
    );
  }
  console.log(
    "!",
    movies.length,
    filteredMovies.length,
    keyWords,
    isCheckBoxActive
  );

  return filteredMovies;
};

export { movieFiltration };
