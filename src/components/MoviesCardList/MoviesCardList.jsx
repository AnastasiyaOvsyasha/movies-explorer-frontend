import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ movies, handleShowMoreMovies, moviesPerPage }) => {

  const handleClickMoreMovies = () => {
    const containerInnerWidth = document.querySelector(
      ".moviescardlist__container"
    ).offsetWidth;
    let numAddMovies;
    if (containerInnerWidth < 1140 && containerInnerWidth > 701) {
      numAddMovies = 2;
    } else if (containerInnerWidth <= 701) {
      numAddMovies = 1;
    } else {
      numAddMovies = 3;
    }

    handleClickMoreMovies(moviesPerPage + numAddMovies);
  };

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        {!movies ? (
          <Preloader />
        ) : (
          movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)
        )}
      </div>
      <button
        className="movies-card-list__icon"
        type="button"
        onClick={handleClickMoreMovies}
      >
        Ещё
      </button>
    </div>
  )
}

export default MoviesCardList;