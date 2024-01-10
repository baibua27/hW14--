import React from 'react';
import TodoItem from "./TodoItem";

function TodoContainer({ todos, editTodo, deleteTodo }) {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} name={todo.name} isComplete={todo.isComplete} editTodo={editTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoContainer;