import React, { useEffect } from 'react';
import './App.css';
import '../../vendor/fonts/fonts.css';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import StatusPopup from '../StatusPopup/StatusPopup';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SAVED_MOVIE } from '../../utils/constants';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpened, setIsPopupOpned] = useState(false);

  const movies = [SAVED_MOVIE]

  let navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  }

  const handlePopupOpen = () => {
    setIsPopupOpned(!isPopupOpened)
  }

  return (
    <div className='app'>
      <Header isLoggedIn={isLoggedIn} handlePopupOpen={handlePopupOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies movies={movies} />} />
          <Route path="/profile" element={<Profile handleLogout={handleLogout} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StatusPopup />
      <BurgerPopup isPopupOpened={isPopupOpened} handlePopupOpen={handlePopupOpen} />
    </div>
  )
}
export default App;