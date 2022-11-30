import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

const SearchForm = ({
  handleMoviesSearch,
  keyWords = "",
  isCheckBoxActive,
  setIsCheckBoxActive,
}) => {
  const [isSpanActive, setIsSpanActive] = useState(false);
  const searchBtn = document.querySelector(".search-form__button");
  const [text, setText] = useState(keyWords);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      handleMoviesSearch(text, isCheckBoxActive);
    } else {
      setIsSpanActive(true);
    }
  };

  const handleCheckBoxClick = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  // Обработка отправки формы по нажатию Enter
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (value.length !== 0) {
      setIsSpanActive(false);
      searchBtn.removeAttribute("disabled", "disabled");
    } else {
      setIsSpanActive(true);
      searchBtn.setAttribute("disabled", "disabled");
    }
  };

  return (
    <section className="search-form">
      <form className='search-form__form' onSubmit={handleSubmit}
        name="search"
        noValidate
        onKeyDown={handleKeydown}>
        <div className="search-form__input-container">
          <input
            className='search-form__input'
            type="text"
            name="request"
            value={text}
            autoFocus
            placeholder='Фильм'
            required
            onChange={handleChange}
            aria-label="Ввод фильма в форму поиска"
          />
          <button className='search-form__button id="searchBtn"'>
            <div className='search-form__button-icon'></div>
          </button>

          <p className={`search-form__error-container ${isSpanActive ? "search-form__error-message" : ""
            }`}
          >
            Необходимо ввести ключевое слово
          </p>
        </div>
        <FilterCheckbox
          isCheckBoxActive={isCheckBoxActive}
          handleCheckBoxClick={handleCheckBoxClick}
        />
      </form>
    </section>
  );
};

export default SearchForm;