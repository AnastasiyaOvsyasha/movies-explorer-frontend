import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';
import { movieFiltration } from '../../utils/MovieFiltration';

const SavedMovies = ({ savedMovies, handleDeleteMovie }) => {
  const [flag] = useState('saved');
  const [keyWords, setKeyWords] = useState('');
  const [moviesToRender, setMoviesToRend] = useState(savedMovies);
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);

  const handleMoviesSearch = (data, isCheckBoxActive) => {
    setKeyWords(data);
    const moviesFiltered = movieFiltration(savedMovies, data, isCheckBoxActive)
    setMoviesToRend(moviesFiltered);
  }

  useEffect(() => {
    const moviesFiltered = movieFiltration(savedMovies, keyWords, isCheckBoxActive)
    setMoviesToRend(moviesFiltered);
  }, [isCheckBoxActive])

  useEffect(() => {
    setMoviesToRend(savedMovies);
  }, [savedMovies])

  return (
    <div className='saved-movies'>
      <SearchForm
        keyWords={keyWords}
        setKeyWords={setKeyWords}
        handleMoviesSearch={handleMoviesSearch}
        setMoviesToRend={setMoviesToRend}
        isCheckBoxActive={isCheckBoxActive}
        setIsCheckBoxActive={setIsCheckBoxActive}
      />
      {
        savedMovies.length === 0
          ?
          (<p className='saved-movies__blank-text'>Вы еще не сохранили ни одинго фильма</p>)
          :

          <MoviesCardList moviesToRender={moviesToRender} flag={flag} handleClick={handleDeleteMovie} allMovies={['anytext']} />
      }
    </div>
  )
}



export default SavedMovies;