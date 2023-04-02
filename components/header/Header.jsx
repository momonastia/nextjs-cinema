import React from "react";
import { GiFilmSpool } from "react-icons/gi";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <GiFilmSpool /> CineMille
      </div>
    </header>
  );
};

export default Header;
