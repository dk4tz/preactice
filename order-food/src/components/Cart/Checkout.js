import React, { useRef, useState } from 'react';

import styles from './Checkout.module.css';

const isEmpty = (val) => val.trim() === '';
const isFiveChars = (val) => val.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const zipCodeInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    zipCode: true,
  });

  const onConfirm = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredZipCode = zipCodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipCodeIsValid =
      !isEmpty(enteredZipCode) && isFiveChars(enteredZipCode);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredZipCodeIsValid;

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      zipCode: enteredZipCodeIsValid,
    });
    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      zipCode: enteredZipCode,
    });
  };

  const nameControlStyles = `${styles.control} ${
    formInputValidity.name ? '' : styles.invalid
  }`;
  const streetControlStyles = `${styles.control} ${
    formInputValidity.city ? '' : styles.invalid
  }`;
  const cityControlStyles = `${styles.control} ${
    formInputValidity.street ? '' : styles.invalid
  }`;
  const zipCodeControlStyles = `${styles.control} ${
    formInputValidity.zipCode ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={onConfirm}>
      <div className={nameControlStyles}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlStyles}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={cityControlStyles}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={zipCodeControlStyles}>
        <label htmlFor='zipCode'>Zip Code</label>
        <input type='text' id='zipCode' ref={zipCodeInputRef} />
        {!formInputValidity.zipCode && (
          <p>Please enter a valid zip code (5 chars).</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
