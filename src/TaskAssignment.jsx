import React, { useState } from 'react';

const TaskAssignment = () => {
  const [assignedUser, setAssignedUser] = useState('');

  const handleAssignTask = () => {
    // Assign task logic here
    console.log('Task Assigned to:', assignedUser);
    // Reset input field
    setAssignedUser('');
  };

  return (
    <div>
      <h2>Task Assignment</h2>
      <input
        type="text"
        value={assignedUser}
        onChange={(e) => setAssignedUser(e.target.value)}
        placeholder="Assign to user"
      />
      <button onClick={handleAssignTask}>Assign Task</button>
    </div>
  );
};

export default TaskAssignment;