import './MoviesCard.css';
import { MOVIES_FRONT_URL } from '../../utils/constants';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  const { nameRU, duration, image } = movie;
  const url = image.formats.thumbnail.url;
  const [isSaved, setIsSaved] = useState(false);

  const { pathname } = useLocation();

  const getTimeFromMins = (duration) => {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleClickSaveMovie = () => {
    setIsSaved(!isSaved);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__textblock">
          <h4 className="movies-card__title">{nameRU}</h4>
          <p className="movies-card__duration">{getTimeFromMins(duration)}</p>
        </div>
        <button
          className={`${pathname === "/saved-movies"
            ? "movies-card__delete-btn"
            : "movies-card__type_main"
            } ${isSaved ? "movies-card__type_main_active " : ""}`}
          onClick={handleClickSaveMovie}
        ></button>
      </div>
      <img
        className="movies-card__img"
        src={`${MOVIES_FRONT_URL}${url}`}
        alt={nameRU}
      />
    </div>
  )
}

export default MoviesCard;