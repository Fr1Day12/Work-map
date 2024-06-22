import { useState } from "react";
import style from "./style.module.css";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState({ username: false, password: false });

  const handleLogin = () => {
    // // Здесь должна быть ваша логика проверки
    // if (!loginUsername) setError((prev) => ({ ...prev, username: true }));
    // if (!loginPassword) setError((prev) => ({ ...prev, password: true }));
  };

  return (
    <div className={style.container}>
      <div className={style["form-wrapper"]}>
        <h2>Вход в аккаунт</h2>

        <div
          className={`${style["form-group"]} ${
            error.username ? style.error : ""
          }`}>
          <label htmlFor="login-username">E-Mail:</label>
          <input
            id="login-username"
            type="text"
            placeholder="Введите логин"
            onChange={(e) => {
              setLoginUsername(e.target.value);
              setError((prev) => ({ ...prev, username: false }));
            }}
          />
          {error.username && (
            <div className={style["error-message"]}>Неверно указана почта</div>
          )}
        </div>

        <div
          className={`${style["form-group"]} ${
            error.password ? style.error : ""
          }`}>
          <label htmlFor="login-password">Пароль:</label>
          <input
            id="login-password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setLoginPassword(e.target.value);
              setError((prev) => ({ ...prev, password: false }));
            }}
          />
        </div>

        <button className={style.button} onClick={handleLogin}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
