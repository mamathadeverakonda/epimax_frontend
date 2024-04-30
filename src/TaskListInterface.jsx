import React, { useState } from 'react';

const TaskListInterface = () => {
  const [newTask, setNewTask] = useState('');
  const [taskDetails, setTaskDetails] = useState('');

  const handleAddTask = () => {
    // Update task details with new task
    setTaskDetails(newTask);
    // Reset input field
    setNewTask('');
  };

  return (
    <div>
      <h2>Task List Interface</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task title"
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      {/* Display task details in container */}
      {taskDetails && (
        <div>
          <h3>Task Details:</h3>
          <p>{taskDetails}</p>
        </div>
      )}
    </div>
  );
};

export default TaskListInterface;