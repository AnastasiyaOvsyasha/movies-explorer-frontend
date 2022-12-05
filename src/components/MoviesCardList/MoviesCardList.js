import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import {
  CARDS_PER_PAGE_LARGE,
  CARDS_PER_PAGE_MEDIUM,
  CARDS_PER_PAGE_SMALL,
  CARDS_ADD_LARGE,
  CARDS_ADD_MEDIUM,
} from "../../utils/constants.js";

const MoviesCardList = ({ moviesToRender, flag, handleClick, allMovies }) => {
  const [moviesStartPack, setMoviesStartPack] = useState(moviesToRender);
  const [isBtnHidden, setIsBtnHidden] = useState(false);
  const [moviesPerPage, setMoviesPerPage] = useState(CARDS_PER_PAGE_LARGE);
  const [moviesAddToPage, setMoviesAddToPage] = useState(CARDS_ADD_LARGE);

  const checkWindowWidth = () => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 1280) {
      setMoviesPerPage(CARDS_PER_PAGE_LARGE);
      setMoviesAddToPage(CARDS_ADD_LARGE);
    } else if (screenWidth < 1280 && screenWidth > 761) {
      setMoviesPerPage(CARDS_PER_PAGE_MEDIUM);
      setMoviesAddToPage(CARDS_ADD_MEDIUM);
    } else {
      setMoviesPerPage(CARDS_PER_PAGE_SMALL);
      setMoviesAddToPage(CARDS_ADD_MEDIUM);
    }
  };

  useEffect(() => {
    checkWindowWidth();
  }, [moviesToRender]);

  window.onresize = (event) => {
    setTimeout(checkWindowWidth, 50);
  };

  const handleClickMoreMovies = () => {
    setMoviesPerPage(moviesPerPage + moviesAddToPage);
  };

  useEffect(() => {
    switch (flag) {
      case "saved":
        setIsBtnHidden(true);
        setMoviesStartPack(moviesToRender);
        break;
      case "movies":
        if (moviesToRender.length <= moviesPerPage) {
          setIsBtnHidden(true);
        } else {
          setIsBtnHidden(false);
        }
        setMoviesStartPack(moviesToRender.slice(0, moviesPerPage));
        break;
      default:
        console.log("error");
        break;
    }
  }, [moviesToRender, flag, moviesPerPage]);

  return (
    <div className={`moviescardlist`}>
      {allMovies.length === 0 ? (
        <div></div>
      ) : moviesToRender.length !== 0 ? (
        <>
          <div className="movies-card-list__container">
            {moviesStartPack.map((movie) => (
              <MoviesCard
                key={movie.movieId}
                movie={movie}
                handleClick={handleClick}
              />
            ))}
          </div>

          <button
            className={`movies-card-list__btn ${
              isBtnHidden ? "movies-card-list__btn_hidden" : ""
            }`}
            type="button"
            onClick={handleClickMoreMovies}
          >
            Ещё
          </button>
        </>
      ) : (
        <div className="movies-card-list__not-found">Ничего не найдено, как так-то:(</div>
      )}
    </div>
  );
};

export default MoviesCardList;
