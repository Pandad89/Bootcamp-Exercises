import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Value: 0,
      Color: 'black',
    }
  }

  clickPlus = () => {
    if(this.state.Value < 10){
      this.setState({
        Value: this.state.Value += 1,
      })
    }
    if (this.state.Value > 0) {
      this.setState({
        Color: 'green'
      })
    }else if(this.state.Value === 0){
      this.setState({
        Color: 'black'
      })
    }
    
  }
  clickMinus = () => {
    if(this.state.Value > -10){
      this.setState({
        Value: this.state.Value -= 1,
      })
    }
    if (this.state.Value < 0) {
      this.setState({
        Color: 'red'
      })
    }else if(this.state.Value === 0){
      this.setState({
        Color: 'black'
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 style={{ color: this.state.Color }}>{this.state.Value}</h1>
        <div className='buttonContainer'>
          <button onClick={this.clickPlus}>+</button>
          <button onClick={this.clickMinus}>-</button>
        </div>
      </div>
    )
  }
}

export default App;
