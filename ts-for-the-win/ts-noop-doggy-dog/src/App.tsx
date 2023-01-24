import React from 'react';

import ToDos from './components/ToDos';
import NewToDo from './components/NewToDo';

import './App.css';
import ToDosContextProvider from './store/todos-context';

function App() {
  return (
    <ToDosContextProvider>
      <NewToDo />
      <ToDos />
    </ToDosContextProvider>
  );
}

export default App;
