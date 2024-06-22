import { useState } from "react";
import style from "./style.module.css";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const handleRegister = () => {
    // if (!fullName) setError((prev) => ({ ...prev, fullName: true }));
    // if (!email) setError((prev) => ({ ...prev, email: true }));
    // if (!password) setError((prev) => ({ ...prev, password: true }));
  };

  return (
    <div className={style.container}>
      <div className={style["form-wrapper"]}>
        <h2>Создание аккаунта</h2>

        <div
          className={`${style["form-group"]} ${
            error.fullName ? style.error : ""
          }`}>
          <label htmlFor="full-name">Полное имя</label>
          <input
            id="full-name"
            type="text"
            placeholder="Введите полное имя"
            onChange={(e) => {
              setFullName(e.target.value);
              setError((prev) => ({ ...prev, fullName: false }));
            }}
          />
          {error.fullName && (
            <div className={style["error-message"]}>Полное имя обязательно</div>
          )}
        </div>

        <div
          className={`${style["form-group"]} ${
            error.email ? style.error : ""
          }`}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            placeholder="Введите email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError((prev) => ({ ...prev, email: false }));
            }}
          />
          {error.email && (
            <div className={style["error-message"]}>Неверно указана почта</div>
          )}
        </div>

        <div
          className={`${style["form-group"]} ${
            error.password ? style.error : ""
          }`}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setPassword(e.target.value);
              setError((prev) => ({ ...prev, password: false }));
            }}
          />
          {error.password && (
            <div className={style["error-message"]}>Пароль обязателен</div>
          )}
        </div>

        <button className={style.button} onClick={handleRegister}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Registration;
