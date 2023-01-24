import React, { useContext } from 'react';
import ToDoItem from './ToDoItem';

import { ToDosContext } from '../store/todos-context';

import styles from './ToDos.module.css';

const ToDos: React.FC = () => {
  const toDosCtx = useContext(ToDosContext);
  return (
    <>
      <ul className={styles.todos}>
        {toDosCtx.items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onRemoveToDo={toDosCtx.removeToDo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDos;
