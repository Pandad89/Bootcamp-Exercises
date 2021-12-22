import './App.css';
import Home from './components/Home';
import Products from './components/Products';

import {BrowserRouter, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products} />
    </div>
      </BrowserRouter>
  );
}

export default App;
