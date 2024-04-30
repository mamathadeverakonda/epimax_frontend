import React, { useState } from 'react';

const TaskStatusUpdates = () => {
  const [status, setStatus] = useState('');

  const handleUpdateStatus = () => {
    // Update task status logic here
    console.log('Task Status Updated to:', status);
    // Reset input field
    setStatus('');
  };

  return (
    <div>
      <h2>Task Status Updates</h2>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select status</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
};

export default TaskStatusUpdates;