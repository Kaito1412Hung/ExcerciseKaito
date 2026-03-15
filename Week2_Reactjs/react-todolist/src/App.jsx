import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text
    }
    setTodos([...todos, newToDo]);
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter(todo => todo.id !== id);
    setTodos(updateTodo);
  }

  return (
    <div className="todo-container">
      <h1>List Todo</h1>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default App
