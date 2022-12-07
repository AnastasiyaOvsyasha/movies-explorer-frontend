import { MOVIES_API_URL } from "./constants";

const changesMovieDate = (movie) => {
  const convertedMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${MOVIES_API_URL}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    thumbnail: `${MOVIES_API_URL}${movie.image.url}`,
    movieId: `${movie.id}`,
  };
  return convertedMovie;
};

export { changesMovieDate };
