import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search-form">
    <form className='search-form__form'>
    <div className="search-form__input-container">
      <input className='search-form__input' type='search' placeholder='Фильм' />
      <button className='search-form__button'>
        <div className='search-form__button-icon'></div>
      </button>
      </div>
      <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;