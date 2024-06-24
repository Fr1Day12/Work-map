import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styles from "./style.module.css";

export const Registration = () => {
  return (
    <Paper className={styles.container}>
      <Typography className={styles.title} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Полное имя" fullWidth />
      <TextField
        className={styles.field}
        label="E-Mail"
        fullWidth
        type="email"
      />
      <TextField
        className={styles.field}
        label="Пароль"
        fullWidth
        type="password"
      />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};

export default Registration;
