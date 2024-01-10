import React, { useState } from 'react';
import Dashboard from "./Dashboard";
import FormAddTodo from "./FormAddTodo";
import TodoContainer from "./TodoContainer";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoName) => {
    const newTodo = { name: todoName, isComplete: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (index, newTodoName, isComplete) => {
    const updatedTodos = [...todos];
    updatedTodos[index].name = newTodoName;
    updatedTodos[index].isComplete = isComplete;
    setTodos(updatedTodos);
  };
  

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <Dashboard todos={todos} />
      <FormAddTodo addTodo={addTodo} />
      <TodoContainer todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;