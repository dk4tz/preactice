import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import donutImage from "../../assets/donut_banner.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>David's Dope Donuts</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={donutImage} alt="delicious donuts in a row" />
      </div>
    </Fragment>
  );
};

export default Header;
