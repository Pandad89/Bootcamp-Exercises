import './App.css';
import Card from './components/Cards';

function App() {
  return (
    <div className="App">
      <Card title="Title 1" />
      <Card subtitle ="Subtitle 1"/>
      <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat"/>
    </div>
  );
}

export default App;
