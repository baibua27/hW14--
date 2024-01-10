import React, { useState } from 'react';

function TodoItem({ index, name, isComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, editedName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    editTodo(index, editedName, !isComplete);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className={`todo-item ${isComplete ? 'complete' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleToggle} style={{ marginRight: '5px', color: isComplete ? 'red' : 'green', backgroundColor: 'transparent', border: 'none' }}>
          {isComplete ? <span style={{ color: 'green' }}>❌</span> : '✔'}
        </button>
        {isEditing ? (
          <div>
            <input type="text" value={editedName} onChange={handleInputChange} />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <p style={{ display: 'inline', textDecoration: isComplete ? 'line-through' : 'none', marginLeft: '5px' }}>{name}</p>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isEditing && (
          <button onClick={handleEdit} style={{ marginLeft: '5px' }}>Edit</button>
        )}
        {!isEditing && (
          <button onClick={handleDelete} style={{ marginLeft: '5px', color: 'red' }}>Delete</button>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
