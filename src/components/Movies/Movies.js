import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movieFiltration } from "../../utils/MovieFiltration";
import Preloader from "../Preloader/Preloader";

const Movies = ({
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie,
  allMovies,
  getAllMovies,
  isPreloaderActive,
}) => {
  const extractCheckBoxStatus = () => {
    const userCheckBoxStatus = JSON.parse(localStorage.getItem("checkBox"));
    return userCheckBoxStatus ? userCheckBoxStatus : false;
  };

  const extractKeyWords = () => {
    const userKeyWords = localStorage.getItem("keyWords");
    return userKeyWords ? userKeyWords : "";
  };

  const [moviesToRender, setMoviesToRender] = useState([]);
  const [keyWords, setKeyWords] = useState(extractKeyWords());
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(
    extractCheckBoxStatus()
  );
  const [flag] = useState("movies");

  const handleMoviesSearch = (text, isCheckBoxActive) => {
    if (allMovies.length < 1) {
      getAllMovies();
    }
    setKeyWords(text);
  };

  const handleCheckBoxClick = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  useEffect(() => {
    localStorage.setItem("checkBox", isCheckBoxActive);
  }, [isCheckBoxActive]);

  useEffect(() => {
    const moviesFiltered = movieFiltration(allMovies, keyWords, isCheckBoxActive);
    setMoviesToRender(moviesFiltered);
  }, [isCheckBoxActive, keyWords, allMovies]);

  const handleClickSaveIcon = (data, isSaved) => {
    if (!isSaved) {
      handleSaveMovie(data);
    } else {
      const deletetMovie = savedMovies.filter(
        (item) => item.movieId === data.movieId
      );
      handleDeleteMovie(deletetMovie[0]);
    }
  };

  useEffect(() => {
    localStorage.setItem("keyWords", keyWords);
  }, [keyWords]);

  return (
    <div className='movies__content'>
      <SearchForm
        handleMoviesSearch={handleMoviesSearch}
        keyWords={keyWords}
        isCheckBoxActive={isCheckBoxActive}
        handleCheckBoxClick={handleCheckBoxClick}
        setKeyWords={setKeyWords}
        setIsCheckBoxActive={setIsCheckBoxActive}
      />
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <MoviesCardList
          moviesToRender={moviesToRender}
          flag={flag}
          handleClick={handleClickSaveIcon}
          allMovies={allMovies}
        />
      )}
    </div>
  );
};

export default Movies;