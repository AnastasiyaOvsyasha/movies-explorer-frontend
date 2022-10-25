import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


const SavedMovies = ({ movies }) => {

  return (
    <div className='saved-movies'>
      <SearchForm />
      {
        !movies ? (<p className='saved-movies__blank-text'>Вы еще не сохранили ни один фильм.</p>) :
          <MoviesCardList movies={movies} />
      }
    </div>
  )
}


export default SavedMovies;