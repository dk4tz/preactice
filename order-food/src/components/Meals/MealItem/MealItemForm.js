import React, { Fragment, useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; // always use .current. with refs !!!!
    const enteredAmountNumber = +enteredAmount; // always returned as a string. must coerce numbers

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {!formIsValid && <p>Please enter a valid amount (1 - 5)</p>}
      </form>
    </Fragment>
  );
};

export default MealItemForm;
