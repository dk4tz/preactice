import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import styles from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ value: 10 })); // { type: SOME_UNIQUE_ID, payload: 10}
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={styles.counter}>
      <h1>Reduxxx Count Dat</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>LESS</button>
        <button onClick={increaseHandler}>ADD 10</button>
        <button onClick={incrementHandler}>MORE</button>
      </div>
      <button onClick={toggleCounterHandler}>Click Me</button>
    </main>
  );
};

export default Counter;
