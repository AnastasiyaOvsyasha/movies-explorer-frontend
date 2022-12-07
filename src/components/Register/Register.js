import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constants";

const Register = ({ handleSignup, errorMesage, setErrorMessage }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleSignup(data);
    setErrorMessage("");
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <h2 className="register__greetings">Добро пожаловать!</h2>

      <label className="register__label">
        Имя
        <input
          className="register__input"
          type="text"
          {...register("name", {
            required: "Это поле обязазательно для заполнения",
            minLength: {
              value: 2,
              message: "Имя должно содержать минимум две буквы",
            },
            maxLength: {
              value: 30,
              message: "Имя не должно содержать больше 30 букв",
            },
            pattern: {
              value: NAME_REGEX,
              message: "Поле может содержать буквы, тире или пробелы",
            },
          })}
        />
      </label>

      <hr className="register__line"></hr>
      <span
        className={`register__error ${errors.name && "register__error_active"}`}
      >
        {errors.name ? errors.name.message : "1"}
      </span>

      <label className="register__label">
        E-mail
        <input
          className="register__input"
          type="email"
          {...register("email", {
            required: "Это поле обязазательно для заполнения",
            pattern: {
              value: EMAIL_REGEX,
              message: "Введён некорректный e-mail",
            },
          })}
        />
      </label>
      <hr className="register__line"></hr>
      <span
        className={`register__error ${
          errors.email && "register__error_active"
        }`}
      >
        {errors.email ? errors.email.message : "1"}
      </span>

      <label className="register__label">
        Пароль
        <input
          className="register__input"
          type="password"
          {...register("password", {
            required: "Это поле обязазательно для заполнения",
          })}
        />
      </label>
      <hr className="register__line"></hr>
      <span
        className={`register__error ${
          errors.password && "register__error_active"
        }`}
      >
        {errors.password ? errors.password.message : "1"}
      </span>
      <span
        className={`register__server-message ${
          errorMesage ? "register__server-message_active" : ""
        }`}
      >
        {errorMesage ? errorMesage : "1"}
      </span>
      <button
        className={`register__button-caption ${
          !isValid ? "register__button_disabled" : ""
        }  `}
      >
        Зарегистрироваться
      </button>
      <p className="register__subtitle">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </p>
    </form>
  );
};

export default Register;
