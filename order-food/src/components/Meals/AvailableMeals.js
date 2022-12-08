import React from "react";

import styles from "./AvailableMeals.module.css";
import DUMMY_DONUTS from "../../data/dummy-donuts";

const AvailableMeals = () => {
  const donutsList = DUMMY_DONUTS.map((donut) => <li>{donut.name}</li>);

  return (
    <section className={styles.donuts}>
      <ul>{donutsList}</ul>
    </section>
  );
};

export default AvailableMeals;
