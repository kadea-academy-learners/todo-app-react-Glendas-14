import { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

function TodoInput(props: TodoInputProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      props.addTodo(input);
      setInput('');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='inputMargin'
        value={input}
        onChange={handleChange}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoInput;
