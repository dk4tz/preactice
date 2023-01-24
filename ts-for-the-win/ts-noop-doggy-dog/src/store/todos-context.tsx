import React, { useState } from 'react';
import ToDo from '../models/ToDo';

type ToDosContextObject = {
  items: ToDo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDosContext = React.createContext<ToDosContextObject>({
  items: [],
  addToDo: (text: string) => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC<{ children?: React.ReactNode }> = (
  props
) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const addToDoHandler = (text: string) => {
    const newToDo = new ToDo(text);
    setToDoList((prevToDoList) => {
      return prevToDoList.concat(newToDo);
    });
  };

  const removeToDoHandler = (id: string) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.filter((item) => item.id !== id);
    });
  };

  const contextValue: ToDosContextObject = {
    items: toDoList,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
  };
  return (
    <ToDosContext.Provider value={contextValue}>
      {props.children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
