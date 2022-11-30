import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constants";

const Profile = ({
  handleLogout,
  handleUpdateUserData,
  errorMesage,
  setErrorMessage,
  isDisabledEditProfile,
  setIsDisabledEditProfile,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isDataTheSame, setIsDataTheSame] = useState(true);

  const {
    register,
    formState: { isValid },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    mode: "all",
  });

  const handleCLickLogout = () => {
    handleLogout();
  };

  const handleClickEdit = () => {
    setIsDisabledEditProfile(!isDisabledEditProfile);
    setErrorMessage("");
  };

  const onSubmit = (data) => {
    handleUpdateUserData(data);

    if (errorMesage) {
      setIsDisabledEditProfile(!isDisabledEditProfile);
    }
  };

  useEffect(() => {
    const name = watch("name");
    console.log(name, "!");
    const email = watch("email");
    if (currentUser.name !== name || currentUser.email !== email) {
      setIsDataTheSame(false);
    } else {
      setIsDataTheSame(true);
    }
    console.log(currentUser.name === name);
  }, [currentUser, watch()]);

  useEffect(() => {
    setValue("name", currentUser.name);
    setValue("email", currentUser.email);
  }, [currentUser, setValue]);

  useEffect(() => {
    setErrorMessage("");
  }, [watch, setErrorMessage]);

  return (
    <form className="profile__form-body" onSubmit={handleSubmit(onSubmit)}>
      <h2>Привет, {currentUser.name}!</h2>
      <div className="profile__form-username">
        <p className="profile__form-title">Имя</p>
        <input
          className="profile__value"
          disabled={isDisabledEditProfile ? "" : "disabled"}
          type="text"
          {...register("name", {
            required: "Это поле обязазательно для заполнения",
            minLength: {
              value: 2,
              message: "Имя должно содержать минимум две буквы",
            },
            maxLength: {
              value: 30,
              message: "Имя должно содержать не более чем 30 букв",
            },
            pattern: {
              value: NAME_REGEX,
              message: "Поле может состоять из букв, тире или пробела",
            },
          })}
        />
      </div>
      <div className="profile__email">
        <p className="profile__form-title">E-mail</p>
        <input
          className="profile__value"
          type="email"
          disabled={isDisabledEditProfile ? "" : "disabled"}
          {...register("email", {
            required: "Это поле обязазательно для заполнения",
            pattern: {
              value: EMAIL_REGEX,
              message: "Здесь должен быть корректный e-mail",
            },
          })}
        />
      </div>
      {!isDisabledEditProfile ? (
        <>
          <button
            className="profile__btn_type_edit"
            type="button"
            onClick={handleClickEdit}
          >
            Редактировать
          </button>
          <button
            className="profile__button-logout"
            type="button"
            onClick={handleCLickLogout}
          >
            Выйти из аккаунта
          </button>
        </>
      ) : (
        <>
          <span
            className={`profile__server-message ${
              errorMesage ? "profile__server-message_active" : ""
            }`}
          >
            {errorMesage ? errorMesage : "1"}
          </span>
          <button
            className={`profile__saved-button ${
              !isValid || errorMesage || isDataTheSame
                ? "profile__saved-button_disabled"
                : ""
            }`}
            type="submit"
          >
            Сохранить
          </button>
        </>
      )}
    </form>
  );
};

export default Profile;
