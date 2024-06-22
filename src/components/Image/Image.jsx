import burger from "../../assets/burger-icon/burger.svg";
import { useState } from "react";
import Login from "../Login/Login";
import Registration from "../Register/Registration";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Image = () => {
  const [burgerMenu, setBurgerMenu] = useState(true);
  const toggleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  return (
    <>
      <img
        src={burger}
        alt="menu-icon"
        className={style.imgBurger}
        onClick={toggleMenu}
      />
      {burgerMenu && (
        <div className={style.burgerMenu}>
          <div>
            <Link to="/auth/login" className={style.link}>
              <button className={style.button}>Login</button>
            </Link>
          </div>
          <div>
            <Link to="/auth/register" className={style.link}>
              <button className={style.button}>Registration</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
