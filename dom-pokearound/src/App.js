import React, { useState, useCallback } from 'react';
import DummyOutput from './components/Dummy/DummyOutput';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleMessageHandler = useCallback(() => {
    if (allowToggle) {
      setShowMessage((previousState) => !previousState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className='app'>
      <h1>Hello David!</h1>
      <DummyOutput show={showMessage}/>
      <button onClick={toggleMessageHandler}>Toggle hidden message</button>
      <button onClick={allowToggleHandler}>Release ze toggle</button>
    </div>
  );
}

export default App;
