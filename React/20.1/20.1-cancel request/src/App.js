import React, { useState } from 'react';
import './App.css';
import FetchApp from './components/FetchApp';

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <button onClick={toggleClick}>Toggle</button>
      {toggle && <FetchApp />}
    </div>
  );
}

export default App;
