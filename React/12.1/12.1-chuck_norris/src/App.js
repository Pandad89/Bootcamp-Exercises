import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      Joke: "",
      ErrorMessage: "",
      isLoading: false,
      Category: [],
    }
  }

   apiFetch = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(this.state.Joke)
    this.setState({
      Joke: result.data.value
    })
  }
  catFetch = async () => {
    const category = await axios.get('ttps://api.chucknorris.io/jokes/categories')
    console.log()
  }

  click = () => {
  }

  render(){
    return(
      <div>
        <button onClick={this.apiFetch}>Click Me!</button>
        <h1 className='Joke'>{this.state.Joke}</h1>
      </div>
    )
  }
}


export default App;
