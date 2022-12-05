import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn, handlePopupOpen }) => {
  const windowInnerWidth = window.innerWidth;

  return (
    <>
      {!loggedIn  ? (
        <>
          <Link to="/signup" className="navigation__link_active">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__btn_signin">Войти</button>
          </Link>
        </>
      ) : windowInnerWidth <= 891 ? (
        <button type='button' className="navigation__burger" onClick={() => handlePopupOpen()}></button>
      ) : (
        <>
          <nav className="navigation__nav">
            <Link to="/movies" className="navigation__item_link_movies">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation__item_link_movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <div className="navigation__link_type">
            <Link to="/profile" className="navigation__link_type_profile">
              Аккаунт
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;