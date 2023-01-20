import React from 'react';

import ToDos from './components/ToDos';

import './App.css';

const TO_DO_LIST: string[] = [
  "Drop it like it's hot",
  'Smoov on the beat',
  'Chill w dre',
];

function App() {
  return (
    <div>
      <ToDos items={TO_DO_LIST}>
        <div>'Hello child'</div>
      </ToDos>
    </div>
  );
}

export default App;
