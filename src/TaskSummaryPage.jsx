import React from 'react';

const TaskSummaryPage = () => {
  // Mock task metrics data
  const taskMetrics = {
    totalTasks: 10,
    completedTasks: 5,
    overdueTasks: 2,
  };

  return (
    <div>
      <h2>Task Summary Page</h2>
      <p>Total Tasks: {taskMetrics.totalTasks}</p>
      <p>Completed Tasks: {taskMetrics.completedTasks}</p>
      <p>Overdue Tasks: {taskMetrics.overdueTasks}</p>
      {/* Add data visualization components here */}
    </div>
  );
};

export default TaskSummaryPage;