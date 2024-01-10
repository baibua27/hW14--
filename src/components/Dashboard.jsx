import React from 'react';

function Dashboard({ todos }) {
  const completedTodosCount = todos.filter(todo => todo.isComplete).length;
  const incompleteTodosCount = todos.length - completedTodosCount;

  return (
    <div className="dashboard">
      <h2>{new Date().toDateString()}</h2>
      <p>
        <span style={{ color: 'green' }}>{`${incompleteTodosCount} ✔`}</span>
        {' / '}
        <span style={{ color: 'red' }}>{`${completedTodosCount} ❌`}</span>
      </p>
    </div>
  );
}

export default Dashboard;