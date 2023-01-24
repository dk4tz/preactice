import React, { useRef, useContext } from 'react';
import { ToDosContext } from '../store/todos-context';

import styles from './NewToDo.module.css';

const NewToDo: React.FC = () => {
  const toDosCtx = useContext(ToDosContext);
  const newToDoInputRef = useRef<HTMLInputElement>(null); //*** all HTML elements have a type ***
  const newToDoSubmitHandler = (event: React.FormEvent) => {
    //*** React.MouseEvent for onClick ***
    event.preventDefault();
    const enteredText = newToDoInputRef.current!.value; //*** '!' signifies that possibly null value can never be null vs. '?' which may be
    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }
    toDosCtx.addToDo(enteredText);
  };
  return (
    <form className={styles.form} onSubmit={newToDoSubmitHandler}>
      <label htmlFor='text'>To Do Text:</label>
      <input type='text' id='text' ref={newToDoInputRef} />
      <button>Add To Do!</button>
    </form>
  );
};

export default NewToDo;
