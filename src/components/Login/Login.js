import "./Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../utils/constants";

const Login = ({ handleLogin, errorMesage, setErrorMessage }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  console.log(errorMesage);

  const onSubmit = (data) => {
    setErrorMessage("");
    handleLogin(data);
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <h2 className="login__greetings">Рады видеть!</h2>
      <label className="login__label">
        E-mail
        <input
          className="login__input"
          type="email"
          {...register("email", {
            required: "Это поле обязазательное для заполнения",
            pattern: {
              value: EMAIL_REGEX,
              message: "Введите корректный e-mail",
            },
          })}
        />
      </label>
      <hr className="login__line"></hr>
      <span className={`login__error ${errors.email && "login__error_active"}`}>
        {errors.email ? errors.email.message : "1"}
      </span>

      <label className="login__label">
        Пароль
        <input
          className="login__input"
          type="password"
          {...register("password", {
            required: "Это поле обязазательно для заполнения",
          })}
        />
      </label>
      <hr className="login__line"></hr>
      <span
        className={`login__error ${errors.password && "login__error_active"}`}
      >
        {errors.password ? errors.password.message : "1"}
      </span>

      <span
        className={`login__server-message ${
          errorMesage ? "login__server-message_active" : ""
        }`}
      >
        {errorMesage ? errorMesage : "1"}
      </span>
      <button
        className={`login__button ${!isValid ? "login__button_disable" : ""}`}
      >
        Войти
      </button>
      <p className="login__subtitle">
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </p>
    </form>
  );
};

export default Login;
