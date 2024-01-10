import React, { useState } from 'react';

function FormAddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState('');

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName.trim() !== '') {
      addTodo(todoName);
      setTodoName('');
    }
  };

  return (
    <form className="form-add-todo" onSubmit={handleSubmit}>
      <input
        type="text" placeholder="NameTodo..." required
        value={todoName}
        onChange={handleInputChange}
      />
      <button type="submit">+Add</button>
    </form>
  );
}

export default FormAddTodo;