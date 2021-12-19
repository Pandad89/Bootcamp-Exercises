import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Increment: 0 };
  }
    handleClick = () => {
      this.setState({
        Increment: this.state.Increment += 1})
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h1>{this.state.Increment}</h1>
      </div>
    )
  }
}

export default App;
