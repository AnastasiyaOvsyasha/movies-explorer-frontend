import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { getMovies } from '../../utils/api';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const [moviesToRender, setMoviesToRender] = useState([]);

  const handleShowMoreMovies = (num) => {
    setMoviesPerPage(num)
  }

  useEffect(() => {
    getMovies()
      .then(data => {
        setMovies(data);
        setMoviesToRender(data.slice(0, moviesPerPage))
        console.log(moviesToRender)
      })
  }, [])

  useEffect(() => {
    let newListMovies = movies.slice(0, moviesPerPage);
    setMoviesToRender(newListMovies)
  }, [movies, moviesPerPage])

  return (
    <div className='movies__content'>
      <SearchForm />
      <MoviesCardList movies={moviesToRender} handleShowMoreMovies={handleShowMoreMovies} moviesPerPage={moviesPerPage} />
    </div>
  )
}
export default Movies;