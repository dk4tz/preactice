import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";
import DUMMY_DONUTS from "../../data/dummy-donuts";

const AvailableMeals = () => {
  const donutsList = DUMMY_DONUTS.map((donut) => (
    <MealItem
      id={donut.id}
      key={donut.id}
      name={donut.name}
      description={donut.description}
      price={donut.price}
    />
  ));

  return (
    <section className={styles.donuts}>
      <Card>
        <ul>{donutsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
