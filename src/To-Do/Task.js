import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>
      {task.title} 
      </span>
             
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
