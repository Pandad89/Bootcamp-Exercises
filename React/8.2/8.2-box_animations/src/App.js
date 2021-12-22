import React from 'react'
import './App.css';
import Box from './components/Box';

class App extends React.Component {



  render() {
    return (
      <div>
        App
        <Box style={{background: 'red'}}/>
      </div>
    )
  }
}

export default App;
