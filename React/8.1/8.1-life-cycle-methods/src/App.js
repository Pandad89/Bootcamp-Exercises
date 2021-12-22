import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      favoriteColor: 'Orange'
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        favoriteColor: 'Yellow'
      })
    }, 1000) 
  }
  componentDidUpdate(){
    document.querySelector('#emptyDiv').append("The new favorite color is")
  }

  render(){
    return(
      <div>
        <div id='emptyDiv'>
        <h1>{this.state.favoriteColor}</h1>

        </div>
      </div>
    )
  }
}

export default App;
