import React from 'react';
//import { useState } from 'react';
import './BurgerPopup.css';
import { Link, NavLink } from 'react-router-dom';

const BurgerPopup = ({ isPopupOpened, handlePopupOpen }) => {

  const setActive = ({ isActive }) => isActive ? "burger-button__nav_active burger-button__nav-item" : 'burger-button__nav-item';

  return (
    <div className={`burger-button ${isPopupOpened ? 'burger-popup_is_opened' : ''}`}>
      <div className='burger-button__container'>
        <button className='burger-button__exit-icon' type='button' onClick={() => handlePopupOpen()}></button>
        <nav className="burger-button__nav">
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={setActive}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={setActive}>
            Сохранённые&nbsp;фильмы
          </NavLink>

          <div className="burger-button__accountblock">
            <Link to="/profile" className="burger-button__accountblock-text" onClick={() => handlePopupOpen()}>
              Аккаунт
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BurgerPopup;