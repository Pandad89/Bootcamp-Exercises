import './App.css';
import Buttons from './components/Buttons';

 function App(){
  return (
    <div className="App">
      <Buttons text="Important" className="Bold"/>
      <Buttons text="Not Important"/>
    </div>
  );
}

export default App;
