import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";
import { fetchAuth, selectIsAuth, setAuth } from "../../redux/slices/auth";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "12345",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      dispatch(setAuth(data.payload));
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper elevation={4} className={style.container}>
      <Typography variant="h5" className={style.title}>
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={style.field}
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите почту" })}
        />
        <TextField
          type="password"
          label="Пароль"
          variant="outlined"
          fullWidth
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
          className={style.field}
          {...register("password", { required: "Введите пароль" })}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          fullWidth
          size="large">
          Войти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
