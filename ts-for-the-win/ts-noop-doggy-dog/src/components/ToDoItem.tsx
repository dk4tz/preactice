import React from 'react';
import ToDo from '../models/ToDo';

import styles from './ToDoItem.module.css';

const ToDoItem: React.FC<{
  item: ToDo;
  onRemoveToDo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveToDo} className={styles.item}>
      {props.item.text}
    </li>
  );
};

export default ToDoItem;
