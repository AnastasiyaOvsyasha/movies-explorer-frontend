export const setStatusSaved = (movie, savedMovies) => {
  let updatedMovie = movie;

  if (savedMovies.length >= 1) {
    const find = savedMovies.find((el) => el.movieId === movie.movieId);

    if (find) {
      updatedMovie.saved = true;
    } else {
      updatedMovie.saved = false;
    }
  } else {
    updatedMovie = movie;
  }

  return updatedMovie;
};
