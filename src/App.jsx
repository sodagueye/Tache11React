import logo from './logo.svg';
import './App.css';
import TodoProvider from './providers/TodoProvider';
import TodoList from './components/Todolist';
import TodoForm from './components/TodoForm';
function App() {
  return (
    <div className="App">
     <h1>Todo list</h1>
     <TodoProvider>
      <TodoForm/>
      <TodoList/>
     </TodoProvider>
    </div>
  );
}

export default App;
