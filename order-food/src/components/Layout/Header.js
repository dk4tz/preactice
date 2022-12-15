import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import donutImage from "../../assets/donut_banner.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>D.D.D.D.</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={donutImage} alt="delicious donuts in a row" />
      </div>
    </Fragment>
  );
};

export default Header;
