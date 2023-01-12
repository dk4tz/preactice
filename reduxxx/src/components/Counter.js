import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const decrementHandler = () => {
    dispatch({type: 'DECREMENT'});
  };
  const incrementHandler = () => {
    dispatch({type: 'INCREMENT'});
  };

  const toggleCounterHandler = () => {};
  return (
    <main className={styles.counter}>
      <h1>Reduxxx Count Dat</h1>
      <div className={styles.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>LESS</button>
        <button onClick={incrementHandler}>MORE</button>
      </div>
      <button onClick={toggleCounterHandler}>Click Me</button>
    </main>
  );
};

export default Counter;
