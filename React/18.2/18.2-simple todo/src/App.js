import './App.css';
import Todo from './components/Todo';

const items = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
  ]

function App() {
  return (
    <div className="App">
      <Todo items={ items }/>
    </div>
  );
}

export default App;
