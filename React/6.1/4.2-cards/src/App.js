import React from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card
          Image='https://tinyurl.com/yvaan9xa'
          Title='Space Title'
          Description='Space Description'
          LinkText1='Space Link 1'
          LinkText2='Space Link 2'
        />
        <Card
          Image='https://tinyurl.com/4n79nvt2'
          Title='Desert Title'
          Description='Desert Description'
          LinkText1='Desert Link 1'
          LinkText2='Desert Link 2'
        />
        <Card
          Image='https://tinyurl.com/4t5phyd2'
          Title='Ocean Title'
          Description='Ocean Description'
          LinkText1='Ocean Link 1'
          LinkText2='Ocean Link 2'
        />
      </div>
    )
  }
}

export default App;
