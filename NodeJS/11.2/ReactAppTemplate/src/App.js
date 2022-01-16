import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [value, setValue] = useState('');

  const clickHandler = () => {
    console.log('Hello')
  }

  useEffect(() => {
    fetch(`/weather?address=${value}`).then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      <button onClick={() => clickHandler()}>Search</button>
    </div>
  );
}

export default App;
