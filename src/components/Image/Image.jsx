import burger from "../../assets/burger-icon/burger.svg";
import { useState } from "react";
import style from "./style.module.css";

const Image = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const toggleMenu = () => setBurgerMenu(!burgerMenu);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <>
      <img
        src={burger}
        alt="menu-icon"
        className={style.imgBurger}
        onClick={toggleMenu}
      />
      {burgerMenu && (
        <input
          type="text"
          placeholder="Введите адрес"
          value={search}
          onChange={handleSearch}
        />
      )}
    </>
  );
};

export default Image;
