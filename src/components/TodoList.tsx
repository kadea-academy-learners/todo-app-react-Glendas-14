interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }
  
  function TodoList(props: TodoListProps) {
    return (
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              className="listName"
              checked={todo.completed}
              onChange={() => props.toggleTodo(todo.id)}
            />
            {todo.text}
            <button className="btnDelete" onClick={() => props.deleteTodo(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  