import React, { useState } from 'react';

function App() {
  const [showP, setShowP] = useState(false);

  console.log('APP RUNNING');

  const toggleMessageHandler = () => {
    setShowP((previousState) => !previousState);
  };

  return (
    <div className='app'>
      <h1>Hello David!</h1>
      {showP && <p>This is new :)</p>}
      <button onClick={toggleMessageHandler}>Toggle hidden message</button>
    </div>
  );
}

export default App;
