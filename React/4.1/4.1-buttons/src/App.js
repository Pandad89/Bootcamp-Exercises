import './App.css';
import Buttons from './components/Buttons';

 function App(){
  return (
    <div className="App">
      <Buttons text="Important" font="bold"/>
      <Buttons text="Not Important"/>
    </div>
  );
}

export default App;
