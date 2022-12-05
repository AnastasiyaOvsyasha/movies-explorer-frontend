import "./App.css";
import "../../vendor/fonts/fonts.css";
import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import OpenRoutes from "../../utils/OpenRoutes";
import { getMoviesAll } from "../../utils/MoviesApi";
import { changesMovieDate } from "../../utils/ChangesMovieDate";
import { setStatusSaved } from "../../utils/setStatusSaved";
import ProtectedRoute from "../ProtectedRoute/ProtectedPoute";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("logIn"));
  const [isPopupOpened, setIsPopupOpned] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [isDisabledEditProfile, setIsDisabledEditProfile] = useState(false);

  const extractAllMoviesLocal = () => {
    let allMoviesLocal = JSON.parse(localStorage.getItem("allMovies"));
    if (!allMoviesLocal) {
      return (allMoviesLocal = []);
    }
    return allMoviesLocal;
  };

  const [allMovies, setAllMovies] = useState(extractAllMoviesLocal());

  const navigate = useNavigate();

  const handleSignup = (data) => {
    const { name, email, password } = data;
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.name || res.email) {
          handleLogin(data);
        }
      })
      .catch((err) => {
        setErrorMessage(err.response);
      });
  };

  const handleLogin = (data) => {
    const { email, password } = data;
    MainApi.login(email, password)
      .then((data) => {
        if (data.message === "Athorization successful") {
          setLoggedIn(true);
          localStorage.setItem("logIn", true);
          getUserData();
          navigate("/movies");
        }
      })
      .catch((err) => {
        setErrorMessage(err.response);
      });
  };

  const handleLogout = () => {
    MainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        localStorage.clear();
        setAllMovies([]);
        setSavedMovies([]);
        setCurrentUser({});
        navigate("/");
        console.log(res);
      })
      .catch((err) => forceLogOutIfErr(err));
  };

  const handleUpdateUserData = ({ name, email }) => {
    MainApi.updateUser(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setIsDisabledEditProfile(false);
      })
      .catch((err) => {
        forceLogOutIfErr(err);
        setErrorMessage(err.response);
      });
  };

  const handlePopupOpen = () => {
    setIsPopupOpned(!isPopupOpened);
  };

  const getUserData = () => {
    if (loggedIn) {
      MainApi.getCurrentUser()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => forceLogOutIfErr(err));
    }
  };

  const handleSaveMovie = (movie) => {
    const isMovieSawedAllReady = savedMovies.some(
      (item) => item.movieId === movie.movieId
    );

    if (!isMovieSawedAllReady) {
      delete movie.saved;
      delete movie._id;
      MainApi.saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res.data]);
          const updatedAllMovies = allMovies.map((el) =>
            el.movieId === res.data.movieId
              ? (el = { ...el, saved: true, _id: res.data._id })
              : el
          );
          setAllMovies(updatedAllMovies);
          localStorage.setItem("allMovies", JSON.stringify(updatedAllMovies));
        })
        .catch((err) => forceLogOutIfErr(err));
    }
  };

  const getAllMovies = () => {
    setIsPreloaderActive(true);
    getMoviesAll()
      .then((res) => {
        let moviesList = res.map((item) => changesMovieDate(item));
        moviesList = moviesList.map((item) =>
          setStatusSaved(item, savedMovies)
        );
        setAllMovies(moviesList);
        localStorage.setItem("allMovies", JSON.stringify(moviesList));
        setIsPreloaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    MainApi.deleteMovie(movie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        setSavedMovies(newSavedMovies);
        const updatedAllMovies = allMovies.map((el) =>
          el.movieId === movie.movieId ? (el = { ...el, saved: false }) : el
        );
        setAllMovies(updatedAllMovies);
        localStorage.setItem("allMovies", JSON.stringify(updatedAllMovies));
      })
      .catch((err) => forceLogOutIfErr(err));
  };

  const tokenCheck = () => {
    MainApi.getCurrentUser()
      .then((res) => {
        if (res.data._id) {
          setCurrentUser(res.data);
          setLoggedIn(true);
          localStorage.setItem("logIn", true);
        }
      })
      .catch((err) => forceLogOutIfErr(err));
  };

  const forceLogOutIfErr = (err) => {
    if (err.response === "Authorization is needed") {
      setLoggedIn(false);
      localStorage.clear();
      setAllMovies([]);
      setSavedMovies([]);
      setCurrentUser({});
      setErrorMessage("");
      navigate("/");
      setIsDisabledEditProfile(false);
    } else {
      return err;
    }
  };

  useEffect(() => {
    if (loggedIn) {
      tokenCheck();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((data) => setSavedMovies(data.data))
        .catch((err) => {
          forceLogOutIfErr(err);
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header loggedIn={loggedIn} handlePopupOpen={handlePopupOpen} />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route
                element={
                  <Movies
                    handleSaveMovie={handleSaveMovie}
                    savedMovies={savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    allMovies={allMovies}
                    getAllMovies={getAllMovies}
                    isPreloaderActive={isPreloaderActive}
                  />
                }
                path="/movies"
              />

              <Route
                element={
                  <SavedMovies
                    savedMovies={savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                }
                path="/saved-movies"
              />

              <Route
                element={
                  <Profile
                    handleLogout={handleLogout}
                    handleUpdateUserData={handleUpdateUserData}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    isDisabledEditProfile={isDisabledEditProfile}
                    setIsDisabledEditProfile={setIsDisabledEditProfile}
                  />
                }
                path="/profile"
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
            <Route element={<OpenRoutes loggedIn={loggedIn} />}>
              <Route
                path="/signup"
                element={
                  <Register
                    handleSignup={handleSignup}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    handleLogin={handleLogin}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                  />
                }
              />
            </Route>
          </Routes>
        </main>
        <Footer />
        <BurgerPopup
          isPopupOpened={isPopupOpened}
          handlePopupOpen={handlePopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
