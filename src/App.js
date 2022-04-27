import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'//we installed bootstrap for styles for this project
//for this project we will use local storage(it is available in inspect ) for database
function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      
    </div>
  );
}

export default App;
