import { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css'

interface Todo{
  id: number;
  text: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }
  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
    
      <h1>Liste des tâches</h1>
      <div className="card ">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        
      </div>
      
    </>
  )
}

export default App
