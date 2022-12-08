import React from "react";
import MealItemForm from "./MealItemForm";

import styles from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // format price and make sure you always render 2 decimal places

  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
