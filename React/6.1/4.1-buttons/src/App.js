import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Buttons text="Important" font="bold"/>
        <Buttons text="Not Important"/>
      </div>
    )
  }
}

export default App;
